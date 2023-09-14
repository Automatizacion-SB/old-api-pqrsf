const { Model, DataTypes } = require('sequelize');

const TIPO_IDENTIFICACION_TABLE = 'tipos_identificacion';

const TipoIdentificacionSchema = {
  id: {
    type: DataTypes.STRING(2),
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class TipoIdentificacion extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPO_IDENTIFICACION_TABLE,
      modelName: 'TipoIdentificacion',
      timestamps: false,
    };
  }
}
module.exports = {
  TIPO_IDENTIFICACION_TABLE,
  TipoIdentificacionSchema,
  TipoIdentificacion,
};
