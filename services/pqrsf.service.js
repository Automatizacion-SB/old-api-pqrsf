const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');

class PeticionService {
  async find() {
    const peticiones = await models.Peticion.findAll({
      attributes: [
        'id',
        'radicado',
        'fechaRecepcion',
        'fechaEnvioResponsableArea',
        'dueDate',
      ],
      include: ['estado', 'tipoPeticion', 'lider', 'peticionario', 'paciente'],
    });

    if (!peticiones) throw boom.notFound('Peticion no encontrada');

    return peticiones;
  }

  async findOne(id) {
    const peticion = await models.Peticion.findByPk(id, {
      attributes: ['id', 'fechaRecepcion', 'estadoId', 'tipoPeticionId'],
      include: ['estado', 'tipoPeticion'],
    });

    if (!peticion) throw boom.notFound('Peticion no encontrada');

    return peticion;
  }

  async create(data) {
    // Deshabilita el trigger antes de la operación DML
    await sequelize.query(
      'DISABLE TRIGGER tr_peticiones_insert ON dbo.peticiones',
    );

    const peticionCreada = await models.Peticion.create(data, {
      include: ['peticionario', 'paciente'],
    });

    // Habilita el trigger nuevamente después de la operación DML
    await sequelize.query(
      'ENABLE TRIGGER tr_peticiones_insert ON dbo.peticiones',
    );

    return peticionCreada;
  }
}

module.exports = PeticionService;
