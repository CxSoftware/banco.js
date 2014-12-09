// Traceur runtime
var traceur = require ('traceur');

// Requirements
var bci = require ('./banks/BciPersonas');
var readline = require ('./async/readline');

(async () =>
{
	// Lgin
	var username = await readline.ask ('Username: ');
	var password = await readline.ask ('Password: ');
	var balance = await bci.login (username, password);
	console.log (balance);
})();
