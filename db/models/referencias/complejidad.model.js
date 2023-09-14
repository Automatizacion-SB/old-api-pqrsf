const { Model, DataTypes } = require('sequelize');

const COMPLEJIDAD_TABLE = 'complejidades';

const ComplejidadSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  diasRestantes: {
    field: 'dias_respuesta',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

class Complejidad extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMPLEJIDAD_TABLE,
      modelName: 'Complejidad',
      timestamps: false,
    };
  }
}

module.exports = { Complejidad, COMPLEJIDAD_TABLE, ComplejidadSchema };
