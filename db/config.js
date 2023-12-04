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
        encrypt: true,
        ssl: {
          rejectUnauthorized: false, // Cambio importante: deshabilita la verificación del certificado
          minVersion: 'TLSv1_2', // Ajusta la versión del protocolo
        },
      },
    },
  },
  production: {
    url: URI,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        ssl: {
          rejectUnauthorized: false, // Cambio importante: deshabilita la verificación del certificado
          minVersion: 'TLSv1_2', // Ajusta la versión del protocolo
        },
      },
    },
  },
};
