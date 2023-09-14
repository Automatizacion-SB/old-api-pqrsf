const { DataTypes, Model, Sequelize } = require('sequelize');
const {
  ESTADO_TABLE,
  TIPO_PETICION_TABLE,
  SERVICIO_TABLE,
  AREA_TABLE,
  CANAL_TABLE,
  CLASE_PETICION_TABLE,
  CALIDAD_TABLE,
} = require('./referencias/general.model');
const { COMPLEJIDAD_TABLE } = require('./referencias/complejidad.model');
const { USUARIO_TABLE } = require('./usuario.model');

const PETICION_TABLE = 'peticiones';

const PeticionSchema = {
  // identificadores
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  radicado: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },

  fechaRecepcion: {
    field: 'fecha_recepcion',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  estadoId: {
    field: 'estado_id',
    type: DataTypes.INTEGER,
    defaultValue: 1,
    references: {
      model: ESTADO_TABLE,
      key: 'id',
    },
  },
  tipoPeticionId: {
    field: 'tipo_peticion_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TIPO_PETICION_TABLE,
      key: 'id',
    },
  },
  servicioId: {
    field: 'servicio_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SERVICIO_TABLE,
      key: 'id',
    },
  },
  areaId: {
    field: 'area_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AREA_TABLE,
      key: 'id',
    },
  },
  motivo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dirigidaA: {
    field: 'dirigida_a',
    type: DataTypes.STRING,
    allowNull: false,
  },
  canalId: {
    field: 'canal_id',
    type: DataTypes.INTEGER,
    defaultValue: 5,
    references: {
      model: CANAL_TABLE,
      key: 'id',
    },
  },
  tutela: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  radicadoTutela: {
    field: 'radicado_tutela',
    type: DataTypes.STRING(40),
    defaultValue: null,
  },

  // información de la gestión
  seGestiono: {
    field: 'se_gestiono',
    type: DataTypes.BOOLEAN,
  },
  fechaDiligencia: {
    field: 'fecha_diligencia',
    type: DataTypes.DATE,
  },
  clasePeticionId: {
    field: 'clase_peticion_id',
    type: DataTypes.INTEGER,
    references: {
      model: CLASE_PETICION_TABLE,
      key: 'id',
    },
  },
  complejidadId: {
    field: 'complejidad_id',
    type: DataTypes.INTEGER,
    references: {
      model: COMPLEJIDAD_TABLE,
      key: 'id',
    },
  },
  dueDate: {
    field: 'due_date',
    type: DataTypes.DATE,
  },
  liderId: {
    field: 'lider_id',
    type: DataTypes.INTEGER,
    references: {
      model: USUARIO_TABLE,
      key: 'id',
    },
  },
  fechaEnvioResponsableArea: {
    field: 'fecha_envio_responsable_area',
    type: DataTypes.DATE,
  },
  respuesta: {
    type: DataTypes.TEXT,
  },

  seDioRespuesta: {
    field: 'se_dio_respuesta',
    type: DataTypes.BOOLEAN,
  },
  descripcionGestion: {
    field: 'descripcion_gestion',
    type: DataTypes.TEXT,
  },
  fechaRespuesta: {
    field: 'fecha_respuesta',
    type: DataTypes.DATE,
  },
  calidadId: {
    field: 'calidad_id',
    type: DataTypes.INTEGER,
    references: { model: CALIDAD_TABLE, key: 'id' },
  },
  diasRestantes: {
    field: 'dias_restantes',
    type: DataTypes.INTEGER,
  },
  diasTranscurridos: {
    field: 'total_dias',
    type: DataTypes.INTEGER,
  },
};

class Peticion extends Model {
  static associates(models) {
    this.hasOne(models.Peticionario, {
      as: 'peticionario',
      foreignKey: 'peticionId',
    });
    this.hasOne(models.Paciente, { as: 'paciente', foreignKey: 'peticionId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PETICION_TABLE,
      modelName: 'Peticion',
      timestamps: false,
    };
  }
}

module.exports = { PETICION_TABLE, PeticionSchema, Peticion };
