require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.HOST_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  define: {
    timestamps: true,
  },
};