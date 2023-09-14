'use strict';

const {
  ReferenciaGeneralSchema,
  EPS_TABLE,
  REGIMEN_TABLE,
  TIPO_PETICION_TABLE,
  AREA_TABLE,
  SERVICIO_TABLE,
  CANAL_TABLE,
  CLASE_PETICION_TABLE,
  ESTADO_TABLE,
  CALIDAD_TABLE,
} = require('../models/referencias/general.model');
const {
  COMPLEJIDAD_TABLE,
  ComplejidadSchema,
} = require('../models/referencias/complejidad.model');
const {
  DEPARTAMENTO_TABLE,
  DepartamentoSchema,
} = require('../models/referencias/departamento.model');
const {
  MUNICIPIO_TABLE,
  MunicipiosSchema,
} = require('../models/referencias/municipio.model');
const {
  TIPO_IDENTIFICACION_TABLE,
  TipoIdentificacionSchema,
} = require('../models/referencias/tipoIdentificacion.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EPS_TABLE, ReferenciaGeneralSchema);
    await queryInterface.createTable(REGIMEN_TABLE, ReferenciaGeneralSchema);
    await queryInterface.createTable(
      TIPO_PETICION_TABLE,
      ReferenciaGeneralSchema,
    );
    await queryInterface.createTable(AREA_TABLE, ReferenciaGeneralSchema);
    await queryInterface.createTable(SERVICIO_TABLE, ReferenciaGeneralSchema);
    await queryInterface.createTable(CANAL_TABLE, ReferenciaGeneralSchema);
    await queryInterface.createTable(
      CLASE_PETICION_TABLE,
      ReferenciaGeneralSchema,
    );
    await queryInterface.createTable(ESTADO_TABLE, ReferenciaGeneralSchema);
    await queryInterface.createTable(CALIDAD_TABLE, ReferenciaGeneralSchema);
    //
    //
    await queryInterface.createTable(COMPLEJIDAD_TABLE, ComplejidadSchema);
    await queryInterface.createTable(DEPARTAMENTO_TABLE, DepartamentoSchema);
    await queryInterface.createTable(MUNICIPIO_TABLE, MunicipiosSchema);
    await queryInterface.createTable(
      TIPO_IDENTIFICACION_TABLE,
      TipoIdentificacionSchema,
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EPS_TABLE);
    await queryInterface.dropTable(REGIMEN_TABLE);
    await queryInterface.dropTable(TIPO_PETICION_TABLE);
    await queryInterface.dropTable(AREA_TABLE);
    await queryInterface.dropTable(SERVICIO_TABLE);
    await queryInterface.dropTable(CANAL_TABLE);
    await queryInterface.dropTable(CLASE_PETICION_TABLE);
    await queryInterface.dropTable(ESTADO_TABLE);
    await queryInterface.dropTable(CALIDAD_TABLE);
    await queryInterface.dropTable(COMPLEJIDAD_TABLE);
    await queryInterface.dropTable(DEPARTAMENTO_TABLE);
    await queryInterface.dropTable(MUNICIPIO_TABLE);
    await queryInterface.dropTable(TIPO_IDENTIFICACION_TABLE);
  },
};
