const schema = {
  body: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
  response: {
    204: {
      description: 'Empty response',
      type: 'object',
    },
  },
  tags: ['customer'],
};

export { schema };
