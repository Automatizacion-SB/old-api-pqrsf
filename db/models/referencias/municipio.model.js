const { Model, DataTypes } = require('sequelize');
const { DEPARTAMENTO_TABLE } = require('./departamento.model');

const MUNICIPIO_TABLE = 'municipios';

const MunicipiosSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departamentoId: {
    field: 'departamento_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: DEPARTAMENTO_TABLE,
      key: 'id',
    },
  },
};

class Municipio extends Model {
  static associates() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MUNICIPIO_TABLE,
      modelName: 'Municipio',
      timestamps: false,
    };
  }
}

module.exports = { MUNICIPIO_TABLE, Municipio, MunicipiosSchema };
