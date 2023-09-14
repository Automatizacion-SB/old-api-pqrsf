const { Model, DataTypes } = require('sequelize');

const DEPARTAMENTO_TABLE = 'departamentos';

const DepartamentoSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Departamento extends Model {
  static associates() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: DEPARTAMENTO_TABLE,
      modelName: 'Departamento',
      timestamps: false,
    };
  }
}

module.exports = { DEPARTAMENTO_TABLE, Departamento, DepartamentoSchema };
