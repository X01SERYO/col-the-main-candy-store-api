import * as create from './create';

/**
 * Handles the create customer
 * @param {Request} req The request
 * @returns {Object} The customer id
 */
const handleCreate = async req => {
  const cmd = new create.Command(req.body);
  const customerId = await create.handle(cmd);

  return { customerId };
};

/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/customer.create', { schema: create.schema }, handleCreate);
};

export { route };
