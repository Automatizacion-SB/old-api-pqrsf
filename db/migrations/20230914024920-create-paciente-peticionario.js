'use strict';

const { PACIENTE_TABLE, PacienteSchema } = require('../models/paciente.model');
const { PETICION_TABLE, PeticionSchema } = require('../models/peticion.model');
const {
  PETICIONARIO_TABLE,
  PeticionarioSchema,
} = require('../models/peticionario.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PETICION_TABLE, PeticionSchema);
    await queryInterface.createTable(PETICIONARIO_TABLE, PeticionarioSchema);
    await queryInterface.createTable(PACIENTE_TABLE, PacienteSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PETICION_TABLE);
    await queryInterface.dropTable(PETICIONARIO_TABLE);
    await queryInterface.dropTable(PACIENTE_TABLE);
  },
};
