'use strict';

const { UsuarioSchema, USUARIO_TABLE } = require('./../models/usuario.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(
      USUARIO_TABLE,
      'estado',
      UsuarioSchema.estado,
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USUARIO_TABLE, 'estado');
  },
};
