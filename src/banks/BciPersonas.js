// Requirements
var phantom = require ('../async/phantom');

// Config
var config = {
	loginUrl: 'https://bciimg.bci.cl/sitioseguro/login/login_personas_act.html',
	balanceUrl: 'https://www.bci.cl/cl/bci/aplicaciones/menu/vistas/inicio/miBanco.jsf'
};

// Methods
module.exports =
{
	login: async (username, password) =>
	{
		var ph = await phantom.createAsync ();
		var page = await ph.createPageAsync ();
		await page.openAsync (config.loginUrl);
		await page.evaluateAsync (data =>
		{
			$('#rut_aux')
				.val (data.username)
				.blur ();
			$('#clave').val (data.password);
			$('#frm').submit ();
		}, { username: username, password: password });
		await page.waitLoad ();
		await page.waitLoad ();
		await page.openAsync (config.balanceUrl);
		await page.waitLoad ();
		var balance = await page.evaluateAsync (() =>
			jQuery ('.montos strong').first().text());
		ph.exit ();
		return balance;
	}
};
