'use strict';

const {
  DERECHO_TABLE,
  DerechoSchema,
} = require('../models/referencias/derecho.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(DERECHO_TABLE, DerechoSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(DERECHO_TABLE);
  },
};
