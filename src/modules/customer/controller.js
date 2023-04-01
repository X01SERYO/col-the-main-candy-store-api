import * as create from './create';
import * as find from './find';

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
  const { customers, totalCount } = await find.handle(query);

  return { customers, totalCount };
};

/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/customer.create', { schema: create.schema }, handleCreate);
  server.get('/customer.find', { schema: find.schema }, handleFind);
};

export { route };
