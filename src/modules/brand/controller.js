import * as create from './create';
import * as find from './find'

/**
 * Handles the create brand
 * @param {Request} req The request
 * @returns {String} The brand id
 */
const handleCreate = async req => {
  const cmd = new create.Command(req.body);
  const brandId = await create.handle(cmd)

  return { brandId };
};

const handleFind = async req => {
  const query = new find.Query(req.query);
  const brands = await find.handle(query)
  
  return { brands };
};

/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/brand.create', { schema: create.schema }, handleCreate);
  server.get('brand.find', { schema: find.schema },handleFind);
};


export { route };
