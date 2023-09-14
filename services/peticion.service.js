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
        'derechos',
      ],
    });

    if (!peticion) throw boom.notFound('Peticion no encontrada');

    return peticion;
  }

  async create(data) {
    const peticion = this.gestionarPeticion(data);

    const peticionCreada = await models.Peticion.create(peticion, {
      include: ['peticionario', 'paciente'],
    });
    return peticionCreada;
  }

  async update(id, change) {
    const peticion = await this.findOne(id);

    const cambios = await this.actualizarPeticion(peticion, change);

    const peticionActualizada = await peticion.update(cambios);

    return peticionActualizada;
  }

  async addItem(data) {
    const newItem = await models.PeticionDerecho.create(data);
    return newItem;
  }

  async delete(id) {
    const peticion = await this.findOne(id);

    await peticion.destroy();

    return { id };
  }

  async gestionarPeticion(peticion) {
    if (peticion.seGestiono) {
      const radicado = await this.calcularNuevoRadicado();
      peticion.radicado = radicado;
    }

    if (peticion.complejidadId) {
      const complejidad = await models.Complejidad.findByPk(
        peticion.complejidadId,
      );

      const { diasRestantes } = complejidad.dataValues;

      let fecha = new Date();

      fecha.setDate(fecha.getDate() + diasRestantes);

      peticion.dueDate = fecha.toISOString();
    }

    return peticion;
  }

  async actualizarPeticion(peticion, change) {
    if (peticion.seGestiono) {
      const radicado = await this.calcularNuevoRadicado();
      change.radicado = radicado;
    }

    if (peticion.complejidadId) {
      const complejidad = await models.Complejidad.findByPk(
        peticion.complejidadId,
      );

      const { diasRestantes } = complejidad.dataValues;

      let fecha = new Date();

      fecha.setDate(fecha.getDate() + diasRestantes);

      change.dueDate = fecha.toISOString();
    }

    return peticion;
  }

  async calcularNuevoRadicado() {
    const ultimaPeticionGestionada = await models.Peticion.findOne({
      where: {
        seGestiono: true,
      },
      order: [['radicado', 'DESC']],
    });

    console.log('hola');
    if (ultimaPeticionGestionada) {
      const ultimoRadicado = ultimaPeticionGestionada.radicado;
      return ultimoRadicado + 1;
    } else {
      return 1;
    }
  }
}

module.exports = PeticionService;
