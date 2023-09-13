class UsuarioService {
  async find() {
    const usuarios = 'encontrados';
    return usuarios;
  }

  async findOne(id) {
    const usuario = 'encontrado con id ' + id;
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
    return usuarioBorrado;
  }
}

module.exports = UsuarioService;
