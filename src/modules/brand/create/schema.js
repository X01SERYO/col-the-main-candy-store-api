const schema = {
  body: {
    type: 'object',
    required: ['name', 'code'],
    properties: {
      name: { type: 'string' },
      code: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        brandId: { type: 'integer' },
      },
    },
  },
  tags: ['brand'],
};

export { schema };
