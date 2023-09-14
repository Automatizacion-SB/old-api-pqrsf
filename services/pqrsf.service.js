const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class PeticionService {
  async find() {
    const peticiones = await models.Peticion.findAll();

    if (!peticiones) throw boom.notFound('Peticion no encontrada');

    return peticiones;
  }

  async findOne(id) {
    const peticion = await models.Peticion.findByPk(id, {
      include: [
        'peticionario',
        'paciente',
        'servicio',
        'estado',
        'tipoPeticion',
        'area',
        'canal',
        'clasePeticion',
        'complejidad',
        'calidad',
      ],
    });

    if (!peticion) throw boom.notFound('Peticion no encontrada');

    return peticion;
  }

  async create(data) {
    const peticionCreada = await models.Peticion.create(data, {
      include: ['peticionario', 'paciente'],
    });

    return peticionCreada;
  }
}

module.exports = PeticionService;
