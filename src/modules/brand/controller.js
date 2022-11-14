/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/brand.create', { schema: create.schema }, handleCreate);
};

export { route };
