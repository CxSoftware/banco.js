var readline = require('readline');

module.exports = {
	ask: q => new Promise (ok =>
	{
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		rl.question (q, answer =>
		{
			rl.close();
			ok (answer);
		});
	})
};