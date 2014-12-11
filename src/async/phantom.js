var phantom = require('phantom');

var evaluateAsync = (page, ev, data) => new Promise (
	ok => page.evaluate (ev, ok, data));

var openAsync = (page, url) => new Promise (
	ok => page.open (url, ok));

var includeJsAsync = (page, url) => new Promise (
	ok => page.includeJs (url, ok));

var getAsync = (page, name) => new Promise (
	ok => page.get (name, ok));

var renderAsync = (page, filename, options) => new Promise (
	ok => page.render (filename, options, ok));

var createPageAsync = (ph, log) => new Promise (ok =>
{
	ph.createPage (page =>
	{
		// Navigating
		var navigating = false;
		var waiting = [];
		page.isNavigating = () => navigating;
		page.set ('onLoadStarted', () =>
		{
			if (log) console.log ('onLoadStarted');
			navigating = true;
		});
		page.set ('onLoadFinished', () =>
		{
			if (log) console.log ('onLoadFinished');
			navigating = false
			waiting.forEach (cb => cb ());
			waiting = [];
		});

		// New functions
		page.evaluateAsync = (ev, data) => evaluateAsync (page, ev, data);
		page.getAsync = (name) => getAsync (page, name);
		page.includeJsAsync = (url) => includeJsAsync (page, url);
		page.openAsync = (url) => openAsync (page, url);
		page.renderAsync = (filename, options) => renderAsync (page, filename, options);
		page.waitLoad = () => new Promise (ok =>
		{
			if (!navigating) ok ();
			waiting.push (ok);
		});

		// Done
		ok (page);
	});
});

phantom.createAsync = () => new Promise (
	ok => phantom.create (ph =>
	{
		ph.createPageAsync = (log = false) => createPageAsync (ph, log);
		ok (ph);
	}));

module.exports = phantom;
