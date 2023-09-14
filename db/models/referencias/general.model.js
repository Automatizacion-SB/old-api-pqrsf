const { Model, DataTypes } = require('sequelize');

const EPS_TABLE = 'eps';
const REGIMEN_TABLE = 'regimenes';
const TIPO_PETICION_TABLE = 'tipos_peticion';
const SERVICIO_TABLE = 'servicios';
const AREA_TABLE = 'areas';
const CANAL_TABLE = 'canales';
const CLASE_PETICION_TABLE = 'clases_peticion';
const ESTADO_TABLE = 'estados';
const CALIDAD_TABLE = 'caracteristicas_calidad';

const ReferenciaGeneralSchema = {
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
};

class Eps extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EPS_TABLE,
      modelName: 'Eps',
      timestamps: false,
    };
  }
}

class Regimen extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REGIMEN_TABLE,
      modelName: 'Regimen',
      timestamps: false,
    };
  }
}

class TipoPeticion extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPO_PETICION_TABLE,
      modelName: 'TipoPeticion',
      timestamps: false,
    };
  }
}

class Servicio extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICIO_TABLE,
      modelName: 'Servicio',
      timestamps: false,
    };
  }
}

class Area extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AREA_TABLE,
      modelName: 'Area',
      timestamps: false,
    };
  }
}

class Canal extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CANAL_TABLE,
      modelName: 'Canal',
      timestamps: false,
    };
  }
}

class ClasePeticion extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLASE_PETICION_TABLE,
      modelName: 'ClasePeticion',
      timestamps: false,
    };
  }
}

class Estado extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ESTADO_TABLE,
      modelName: 'Estado',
      timestamps: false,
    };
  }
}

class Calidad extends Model {
  static associates() {
    // associates
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CALIDAD_TABLE,
      modelName: 'Calidad',
      timestamps: false,
    };
  }
}
module.exports = {
  ReferenciaGeneralSchema,
  Eps,
  EPS_TABLE,
  Regimen,
  REGIMEN_TABLE,
  TipoPeticion,
  TIPO_PETICION_TABLE,
  Area,
  AREA_TABLE,
  Servicio,
  SERVICIO_TABLE,
  Canal,
  CANAL_TABLE,
  ClasePeticion,
  CLASE_PETICION_TABLE,
  Estado,
  ESTADO_TABLE,
  Calidad,
  CALIDAD_TABLE,
};
