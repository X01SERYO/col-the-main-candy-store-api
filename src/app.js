import * as server from './server';
import { pipe } from 'ramda';

const run = pipe(server.configureProcess, server.build, server.start);

run();
