const schema = {
  body: {
    type: 'object',
    required: ['name', 'phone'],
    properties: {
      name: { type: 'string' },
      phone: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        customerId: { type: 'string' },
      },
    },
  },
  tags: ['customer'],
};

export { schema };
