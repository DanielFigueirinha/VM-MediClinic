const staticConnection = {
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
};

const config = {
  development: {
    client: 'pg',
    connection: staticConnection,
    migrations: {
      directory: './migrations',
    },
  },
};

module.exports = config;
