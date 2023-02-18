import * as create from './create';
import * as find from './find';
import * as update from './update';

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
 * Handles the find product
 * @param {Request} req  The request
 * @returns {Object} The products and the total count
 */
const handleFind = async req => {
  const query = new find.Query(req.query);
  const { products, totalCount } = await find.handle(query);

  return { products, totalCount };
};

/**
 * Handles the update product
 * @param {Request} req The request
 * @param {Response} res The response
 */
const handleUpdate = async (req, res) => {
  const body = new update.Command(req.body);
  await update.handle(body);

  res.status(204);
};

/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/product.create', { schema: create.schema }, handleCreate);
  server.get('/product.find', { schema: find.schema }, handleFind);
  server.patch('/product.update', { schema: update.schema }, handleUpdate);
};

export { route };
