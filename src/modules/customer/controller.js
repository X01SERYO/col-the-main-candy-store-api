import * as del from './delete';
import * as create from './create';
import * as find from './find';
import * as update from './update';

/**
 * Handles the delete customer
 * @param {Request} req The request
 * @param {Response} res The response
 */
const handleDelete = async (req, res) => {
  const cmd = new del.Command(req.body);
  await del.handle(cmd);

  res.status(204);
};

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
 * Handles the find customer
 * @param {Request} req The request
 * @returns {Object} The products and the total count
 */
const handleFind = async req => {
  const query = new find.Query(req.query);
  const response = await find.handle(query);

  return response;
};

/**
 * Handles the update customer
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
  server.patch('/customer.delete', { schema: del.schema }, handleDelete);
  server.post('/customer.create', { schema: create.schema }, handleCreate);
  server.get('/customer.find', { schema: find.schema }, handleFind);
  server.patch('/customer.update', { schema: update.schema }, handleUpdate);
};

export { route };
