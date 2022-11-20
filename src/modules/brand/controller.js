import * as create from './create';

const handleCreate = async req => {
  const cmd = new create.Command(req.body);
  const brandId = await create.handle(cmd);

  return { brandId };
};

/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/brand.create', { schema: create.schema }, handleCreate);
};

export { route };
