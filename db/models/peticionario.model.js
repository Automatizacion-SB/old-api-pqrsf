const { DataTypes, Model } = require('sequelize');

const {
  TIPO_IDENTIFICACION_TABLE,
} = require('../models/referencias/tipoIdentificacion.model');
const { PETICION_TABLE } = require('./peticion.model');

const PETICIONARIO_TABLE = 'peticionarios';

const PeticionarioSchema = {
  peticionId: {
    field: 'peticion_id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: PETICION_TABLE,
      key: 'id',
    },
  },
  id: {
    type: DataTypes.STRING(17),
    primaryKey: true,
    allowNull: false,
  },
  tipoId: {
    field: 'tipo_id',
    type: DataTypes.STRING(2),
    allowNull: false,
    references: { model: TIPO_IDENTIFICACION_TABLE, key: 'id' },
  },
  nombre: {
    type: DataTypes.STRING(125),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(125),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
};
class Peticionario extends Model {
  static associates() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PETICIONARIO_TABLE,
      modelName: 'Peticionario',
      timestamps: false,
    };
  }
}

module.exports = { PETICIONARIO_TABLE, PeticionarioSchema, Peticionario };
