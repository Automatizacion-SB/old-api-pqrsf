'use strict';

const {
  PeticionSchema,
  PETICION_TABLE,
} = require('./../models/peticion.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(PETICION_TABLE, 'nota', PeticionSchema.nota);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(PETICION_TABLE, 'nota');
  },
};
