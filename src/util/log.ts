// Dependencies
import * as winston from 'winston';

// Local
import config from './config';

// Configure
// Console
winston.remove (winston.transports.Console);
if (config.log.enabled)
	winston.add (winston.transports.Console, config.log);
