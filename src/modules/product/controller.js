import * as create from './create';

/**
 * Handles the create product
 * @param {Request} req The request
 * @returns {Object} The product id
 */
const handleCreate = async req => {
  const cmd = new create.Command(req.body);
  const productId = await create.handle(cmd);

  return { productId };
};

/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/product.create', { schema: create.schema }, handleCreate);
};

export { route };
