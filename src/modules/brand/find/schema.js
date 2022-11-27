const schema = {
  query: {
    type: 'object',
    required: ['page', 'size'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      code: { type: 'string' },
      page: { type: 'integer' },
      size: { type: 'integer' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        brandId: { type: 'string' },
        brandName: { type: 'string' },
        brandCode: { type: 'string' },
      },
    },
  },
  tags: ['brand'],
};
export { schema };
