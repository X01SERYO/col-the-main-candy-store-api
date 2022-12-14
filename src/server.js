import fastifySwagger from '@fastify/swagger';
import multipart from '@fastify/multipart';
import * as modules from './modules';
import cors from '@fastify/cors';
import Fastify from 'fastify';
import { config, logger } from './infra';

/**
 * Configure routes
 * @param {Fastify} server The server
 */
const route = async server => {
  modules.brand.controller.route(server);
  modules.product.controller.route(server);
};

const existProcess = () => process.exit(1);

const handleServerError = err => {
  logger.error(err);
  existProcess();
};

const handleValidationError = errs => {
  const error = errs.map(e => `<${e.dataPath}> ${e.message}`).join(';');
  logger.error(error);

  return { error };
};

const handleNotFound = async req => {
  const error = `NOT FOUND ${req.url}`;

  return { error };
};

const handleError = async (err, req, res) => {
  if (err instanceof SyntaxError) err = `Error found: ${err.message}`;
  logger.error(err);
  res.status(500).send(err);
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
        title: 'col-the-main-candy-store',
        description: 'Project about main candy store',
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

export { build, start };
