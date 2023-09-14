const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UsuarioService {
  async find() {
    const usuarios = await models.Usuario.findAll();

    if (!usuarios) throw boom.notFound('Usuario no encontrada');

    return usuarios;
  }

  async findOne(id) {
    const usuario = await models.Usuario.findByPk(id);

    if (!usuario) throw boom.notFound('Usuario no encontrada');

    return usuario;
  }

  async create(data) {
    const usuarioCreado = await models.Usuario.create(data);

    return usuarioCreado;
  }

  async update(id, changes) {
    const usuario = await this.findOne(id);

    const usuarioActualizado = await usuario.update(changes);
    return usuarioActualizado;
  }

  async delete(id) {
    const usuario = this.findOne(id);

    await usuario.destroy();

    return { id };
  }
}

module.exports = UsuarioService;
