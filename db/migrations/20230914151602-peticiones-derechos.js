'use strict';

const {
  PETICIONES_DERECHOS_TABLE,
  PeticionDerechoSchema,
} = require('../models/peticiones-derechos.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      PETICIONES_DERECHOS_TABLE,
      PeticionDerechoSchema,
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PETICIONES_DERECHOS_TABLE);
  },
};
