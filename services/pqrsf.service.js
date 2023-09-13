const boom = require('@hapi/boom');

class PeticionService {
  async find() {
    const peticiones = 'encontrados';

    if (!peticiones) throw boom.notFound('Peticion no encontrada');

    return peticiones;
  }

  async findOne(id) {
    const peticion = 'encontrado con id ' + id;

    if (!peticion) throw boom.notFound('Peticion no encontrada');

    return peticion;
  }

  async create(data) {
    const peticionCreada = 'creado' + data;

    if (!peticionCreada) throw boom.notFound('Peticion no encontrada');

    return peticionCreada;
  }

  async delete(id) {
    const peticionBorrada = 'borrado' + id;

    if (!peticionBorrada) throw boom.notFound('Peticion no encontrada');

    return peticionBorrada;
  }
}

module.exports = PeticionService;
