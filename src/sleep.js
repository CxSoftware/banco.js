
module.exports = (timeout) => new Promise (
	ok => setTimeout (ok, timeout));
