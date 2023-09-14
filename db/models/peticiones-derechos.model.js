const { Model, DataTypes } = require('sequelize');

const { PETICION_TABLE } = require('./peticion.model');
const { DERECHO_TABLE } = require('./referencias/derecho.model');

const PETICIONES_DERECHOS_TABLE = 'peticiones_derechos';

const PeticionDerechoSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  peticionId: {
    field: 'peticion_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PETICION_TABLE,
      key: 'id',
    },
  },
  derechoId: {
    field: 'derecho_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: DERECHO_TABLE,
      key: 'id',
    },
  },
};

class PeticionDerecho extends Model {
  static associates() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PETICIONES_DERECHOS_TABLE,
      modelName: 'PeticionDerecho',
      timestamps: false,
    };
  }
}

module.exports = {
  PETICIONES_DERECHOS_TABLE,
  PeticionDerechoSchema,
  PeticionDerecho,
};
