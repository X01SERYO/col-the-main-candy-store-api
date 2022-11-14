import convict from 'convict';

const load = schema => {
  const config = convict(schema);
  config.validate({ allowed: 'strict' });

  return config.getProperties();
};

export { load };
