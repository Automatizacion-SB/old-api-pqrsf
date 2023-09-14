'use strict';

const {
  DERECHOS_TABLE,
  DerechosSchema,
} = require('../models/referencias/derechos.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(DERECHOS_TABLE, DerechosSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(DERECHOS_TABLE);
  },
};
