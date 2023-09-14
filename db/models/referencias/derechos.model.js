const { Model, DataTypes } = require('sequelize');

const DERECHOS_TABLE = 'derechos';

const DerechosSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  derecho: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  valor: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  deber: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  factorExito: {
    field: 'factor_exito',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  interpretacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

class Derechos extends Model {
  static associates() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: DERECHOS_TABLE,
      modelName: 'Derechos',
      timestamps: false,
    };
  }
}

module.exports = { DERECHOS_TABLE, Derechos, DerechosSchema };
