class PeticionService {
  async find() {
    const peticiones = 'encontrados';
    return peticiones;
  }

  async findOne(id) {
    const peticion = 'encontrado con id ' + id;
    return peticion;
  }

  async create(data) {
    const peticionCreada = 'creado' + data;
    return peticionCreada;
  }

  async delete(id) {
    const peticionBorrada = 'borrado' + id;
    return peticionBorrada;
  }
}

module.exports = PeticionService;
