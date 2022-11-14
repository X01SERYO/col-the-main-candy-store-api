import * as configuration from './config';
import * as schema from './schema';

const config = configuration.load(schema.schema);

export default config;
