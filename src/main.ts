// Runtime
import './util/log';

// Dependencies
import * as winston from 'winston';

// Local
import config from './util/config';

(async () =>
{
	try
	{
		winston.info ('Hello world!');
		winston.info ('Config', config);
	}
	catch (e)
	{
		winston.error (e);
	}
})();
