const schema = {
  query: {
    type: 'object',
    required: ['page', 'size'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      phone: { type: 'string' },
      deleted: { type: 'boolean' },
      page: { type: 'integer' },
      size: { type: 'integer' },
    },
  },
};

export { schema };
