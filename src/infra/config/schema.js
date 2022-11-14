const schema = {
  server: {
    port: {
      format: 'port',
      default: 4000,
      env: 'PORT',
    },
    ip: {
      format: 'String',
      default: '0.0.0.0',
      env: 'SERVER_IP_ADDRESS',
    },
    docs: {
      expose: {
        format: 'Boolean',
        default: false,
        env: 'SERVER_DOCS_EXPOSE',
      },
    },
  },
  db: {
    pg: {
      user: {
        format: 'String',
        default: 'user',
        env: 'PGUSER',
      },
      password: {
        format: 'String',
        default: 'password',
        env: 'PGPASSWORD',
      },
    },
  },
};

export { schema };
