const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `mssql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mssql',
  // logging: true,
  dialectOptions: {
    options: {
      encrypt: false, // Para utilizar SSL/TLS (en algunos casos es necesario)
    },
  },
});

setupModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
