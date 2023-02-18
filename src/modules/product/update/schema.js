const schema = {
  body: {
    type: 'object',
    required: ['id'],
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
  response: {
    204: {
      description: 'Empty response',
      type: 'object',
    },
  },
  tags: ['product'],
};

export { schema };
