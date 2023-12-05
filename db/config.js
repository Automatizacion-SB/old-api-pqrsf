const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mssql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const URI = `mssql://${config.dbHost}:${config.dbPort}/${config.dbName}?domain=${config.dbDomain}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  },
  production: {
    url: URI,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  },
};
