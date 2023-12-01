const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mssql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// const URI = `mssql://${config.dbHost}:${config.dbPort}/${config.dbName}?authentication=Windows`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true, // Habilita la encriptación SSL
      },
    },
  },
  production: {
    url: URI,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true, // En producción, asegúrate de manejar adecuadamente la validación del certificado
      },
    },
  },
};
