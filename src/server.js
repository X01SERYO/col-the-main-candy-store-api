import fastifySwagger from '@fastify/swagger';
import multipart from '@fastify/multipart';
import * as modules from './modules';
import cors from '@fastify/cors';
import Fastify from 'fastify';
import { config } from './infra';

/**
 * Configure routes
 * @param {Fastify} server The server
 */
const route = async server => {
};

const existProcess = () => process.exit(1);

const handleServerError = err => {
  existProcess();
};

const handleValidationError = errs => {
  const error = errs.map(e => `<${e.dataPath}> ${e.message}`).join(';');
  console.log(error);

  return { error };
};

const handleNotFound = async req => {
  const error = `NOT FOUND ${req.url}`;

  return { error };
};

const handleError = async (err, req, res) => {
  if (err instanceof SyntaxError) {
    err = `Error found: ${err.message}`;
  }

  const problem = err;
  console.log(problem);

  res.status(500).send(problem);
};

/**
 * Builds openApi configuration
 * @returs {Object} The configuration
 */
const openApiConfig = () => {
  const openApiConfig = {
    swagger: {
      host: 'localhost',
      info: {
        version: '0.0.1',
        title: 'Project test',
        description: 'Proyecto de prueba',
      },
      schemas: ['http'],
      produces: ['application/json'],
    },
    exposeRoute: config.server.docs.expose,
  };

  return openApiConfig;
};

/**
 * Builds a fastify server
 * @returns {Fastify} A server
 */
const build = () => {
  const server = Fastify({ logger: true });

  //Plugins
  server.register(multipart, { attachFieldsToBody: true });
  server.register(fastifySwagger, openApiConfig());
  server.register(route, { prefix: '/api' });
  server.register(cors, { origin: '*' });

  //Error handlers
  server.setErrorHandler(handleError);
  server.setNotFoundHandler(handleNotFound);
  server.setSchemaErrorFormatter(handleValidationError);

  return server;
};

/**
 * Starts a server
 * @param {Fastify} server The server
 */
const start = async server => {
  try {
    await server.listen(config.server.port, config.server.ip);
  } catch (err) {
    handleServerError(err);
  }
};

/**
 * Configures the node process
 */
const configureProcess = () => {
  console.log(config.server.docs.expose);
  console.log(config.server.port);
  console.log(config.server.ip);
};

export { build, start, configureProcess };
