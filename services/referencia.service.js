const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ReferenciaService {
  async findTiposIdentificacion() {
    const referencias = await models.TipoIdentificacion.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findEps() {
    const referencias = await models.Eps.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findRegimenes() {
    const referencias = await models.Regimen.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findServicios() {
    const referencias = await models.Servicio.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findCanales() {
    const referencias = await models.Canal.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findClasesPeticion() {
    const referencias = await models.ClasePeticion.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findTiposPeticion() {
    const referencias = await models.TipoPeticion.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findComplejidad() {
    const referencias = await models.Complejidad.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findAreas() {
    const referencias = await models.Area.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findEstados() {
    const referencias = await models.Estado.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findCalidad() {
    const referencias = await models.Calidad.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findLideres() {
    const referencias = await models.Usuario.findAll({
      attributes: ['id', 'cargo'],
      where: {
        role: 'lider',
      },
    });

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findDepartamos() {
    const referencias = await models.Departamento.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }

  async findMunicipiosByDepartamento(id) {
    const referencias = await models.Municipio.findAll({
      where: {
        departamentoId: id,
      },
    });

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }
  async findDerechos() {
    const referencias = await models.Derecho.findAll();

    if (!referencias) throw boom.notFound('Referencia no encontrada');

    return referencias;
  }
}

module.exports = { ReferenciaService };
