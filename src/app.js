import * as server from './server';
import { pipe } from 'ramda';

const run = pipe(server.build, server.start);

run();
