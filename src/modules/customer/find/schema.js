const schema = {
  body: {
    oneOf: [
      {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          phone: { type: 'string' },
          deleted: { type: 'boolean' },
        },
      },
      {
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
    ],
  },
  response: {
    200: {
      oneOf: [
        {
          type: 'object',
          properties: {
            customers: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  phone: { type: 'string' },
                },
              },
            },
            totalCount: { type: 'integer' },
          },
        },
        {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            phone: { type: 'string' },
          },
        },
      ],
    },
  },
  tags: ['customer'],
};

export { schema };
