const schema = {
  query: {
    type: 'object',
    required: ['page', 'size'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      boxUnits: { type: 'integer' },
      productUnits: { type: 'integer' },
      profitRate: { type: 'number' },
      buyPrice: { type: 'number' },
      salePrice: { type: 'number' },
      brandId: { type: 'string' },
      page: { type: 'integer' },
      size: { type: 'integer' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        products: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              boxUnits: { type: 'integer' },
              productUnits: { type: 'integer' },
              profitRate: { type: 'number' },
              buyPrice: { type: 'number' },
              salePrice: { type: 'number' },
              brandId: { type: 'string' },
            },
          },
        },
        totalCount: { type: 'integer' },
      },
    },
  },
  tags: ['product'],
};
export { schema };
