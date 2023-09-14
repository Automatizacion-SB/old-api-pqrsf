const { Usuario, UsuarioSchema } = require('./usuario.model');

function setUpModels(sequelize) {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

module.exports = setUpModels;
