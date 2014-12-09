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
	console.log ('Loging in...');
	await bci.login (username, password);

	console.log ('Getting accounts...');
	var accounts = await bci.getAccounts ();
	console.log (accounts);
	if (accounts.length == 0)
		throw Error ('No accounts found!');

	console.log ('Getting balance');
	var balance = await bci.getBalance (accounts [0].id);
	console.log ("Balance for", accounts[0].name, balance);

	bci.dispose ();
})();
