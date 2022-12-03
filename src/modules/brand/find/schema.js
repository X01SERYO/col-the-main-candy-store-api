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
        brands: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              code: { type: 'string' },
            },
          },
        },
        totalCount: { type: 'integer' },
      },
    },
  },
  tags: ['brand'],
};
export { schema };
