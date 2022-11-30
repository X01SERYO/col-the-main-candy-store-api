import * as create from './create';
import * as find from './find';
import * as update from './update';

/**
 * Handles the create brand
 * @param {Request} req The request
 * @returns {String} The brand id
 */
const handleCreate = async req => {
  const cmd = new create.Command(req.body);
  const brandId = await create.handle(cmd);

  return { brandId };
};

/**
 * Handles the find brand
 * @param {Request} req  The request
 * @returns {Object[]} The brands
 */
const handleFind = async req => {
  const query = new find.Query(req.query);
  const brands = await find.handle(query);

  return { brands };
};

/**
 *
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
  server.post('/brand.create', { schema: create.schema }, handleCreate);
  server.get('brand.find', { schema: find.schema }, handleFind);
  server.patch('/brand.update', { schema: update.schema }, handleUpdate);
};

export { route };
