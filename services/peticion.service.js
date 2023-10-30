const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
const AuthService = require('./auth.service');

const emailService = new AuthService();
class PeticionService {
  async find(query) {
    const options = {};

    const { limit, offset } = query;
    if (limit && offset) {
      (options.limit = limit), (options.offset = offset);
    }

    // const peticiones = await models.Peticion.findAll(options);
    const peticiones = await models.Peticion.findAll({
      include: ['estado', 'tipoPeticion'],
    });

    if (!peticiones) throw boom.notFound('Peticion no encontrada');

    return peticiones;
  }

  async findOne(id) {
    const peticion = await models.Peticion.findByPk(id, {
      include: [
        {
          model: models.Paciente,
          as: 'paciente',
          include: ['eps', 'regimen', 'departamento', 'municipio'],
        },
        // 'paciente',
        'peticionario',
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

  async findByUser(id) {
    const peticiones = await models.Peticion.findAll({
      include: ['estado', 'tipoPeticion'],
      where: {
        liderId: id,
      },
    });

    return peticiones;
  }

  async create(data) {
    const peticion = this.gestionarPeticion(data);

    const peticionCreada = await models.Peticion.create(peticion, {
      include: ['peticionario', 'paciente'],
    });

    if (data.liderId) {
      await emailService.sendNotificacionPeticion(peticionCreada);
    }

    return peticionCreada;
  }

  async update(id, change) {
    const peticion = await this.findOne(id);

    const newChange = await this.actualizarPeticion(peticion, change);

    const peticionActualizada = await peticion.update(newChange);

    if (change.liderId) {
      await emailService.sendNotificacionPeticion(peticionActualizada);
    }

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
    if (!peticion.seGestiono) {
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
    return change;
  }

  async calcularNuevoRadicado() {
    const ultimaPeticionGestionada = await models.Peticion.findOne({
      where: {
        seGestiono: true,
      },
      order: [['radicado', 'DESC']],
    });

    if (ultimaPeticionGestionada) {
      const ultimoRadicado = ultimaPeticionGestionada.radicado;
      return ultimoRadicado + 1;
    } else {
      return 1;
    }
  }
}

module.exports = PeticionService;
