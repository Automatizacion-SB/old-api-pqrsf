const boom = require('@hapi/boom');

class UsuarioService {
  async find() {
    const usuarios = 'encontrados';

    if (!usuarios) throw boom.notFound('Usuario no encontrada');

    return usuarios;
  }

  async findOne(id) {
    const usuario = 'encontrado con id ' + id;

    if (!usuario) throw boom.notFound('Usuario no encontrada');

    return usuario;
  }

  async create(data) {
    const usuarioCreado = 'creado' + data;

    return usuarioCreado;
  }

  async update(id, change) {
    const usuarioActualizado = 'actualizado' + id + change;

    return usuarioActualizado;
  }

  async delete(id) {
    const usuarioBorrado = 'borrado' + id;

    if (!usuarioBorrado) throw boom.notFound('Usuario no encontrada');

    return usuarioBorrado;
  }
}

module.exports = UsuarioService;
