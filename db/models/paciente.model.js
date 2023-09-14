const { DataTypes, Model } = require('sequelize');

const { EPS_TABLE, REGIMEN_TABLE } = require('./referencias/general.model');
const { DEPARTAMENTO_TABLE } = require('./referencias/departamento.model');
const { MUNICIPIO_TABLE } = require('./referencias/municipio.model');
const {
  TIPO_IDENTIFICACION_TABLE,
} = require('./referencias/tipoIdentificacion.model');
const { PETICION_TABLE } = require('./peticion.model');

const PACIENTE_TABLE = 'pacientes';

const PacienteSchema = {
  peticionId: {
    field: 'peticion_id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: PETICION_TABLE,
      key: 'id',
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
    epsId: {
      field: 'eps_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: EPS_TABLE,
        key: 'id',
      },
    },
    regimenId: {
      field: 'regimen_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: REGIMEN_TABLE,
        key: 'id',
      },
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
    municipioId: {
      field: 'municipio_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MUNICIPIO_TABLE,
        key: 'id',
      },
    },
  },
};

class Paciente extends Model {
  static associates() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PACIENTE_TABLE,
      modelName: 'Paciente',
      timestamps: false,
    };
  }
}

module.exports = { PACIENTE_TABLE, PacienteSchema, Paciente };
