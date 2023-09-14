const { Model, DataTypes } = require('sequelize');

const DERECHO_TABLE = 'derechos';

const DerechoSchema = {
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

class Derecho extends Model {
  static associates() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: DERECHO_TABLE,
      modelName: 'Derecho',
      timestamps: false,
    };
  }
}

module.exports = { DERECHO_TABLE, Derecho, DerechoSchema };
