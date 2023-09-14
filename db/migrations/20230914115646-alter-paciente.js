'use strict';

const { PACIENTE_TABLE, PacienteSchema } = require('../models/paciente.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.dropTable(PACIENTE_TABLE);
    await queryInterface.createTable(PACIENTE_TABLE, PacienteSchema);
  },

  async down() {},
};
