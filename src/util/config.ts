// Dependencies
import * as jsonfile from 'jsonfile';
import * as path from 'path';

// Constants
const CONFIG_PATH = path.join (__dirname, '..', '..', 'config.json');

// Module
export default jsonfile.readFileSync (CONFIG_PATH);
