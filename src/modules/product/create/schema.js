const schema = {
  body: {
    type: 'object',
    required: [
      'name',
      'boxUnits',
      'productUnits',
      'profitRate',
      'buyPrice',
      'salePrice',
      'brandId',
    ],
    properties: {
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
    200: {
      type: 'object',
      properties: {
        productId: { type: 'string' },
      },
    },
  },
  tags: ['product'],
};

export { schema };
