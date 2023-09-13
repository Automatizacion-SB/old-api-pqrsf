const Joi = require('joi');

const tipoId = Joi.string().max(2).uppercase();
const id = Joi.string().alphanum().max(17);
const nombre = Joi.string().max(255);
const apellido = Joi.string().max(255);
const epsId = Joi.number().integer();
const regimenId = Joi.number().integer();
const departamentoId = Joi.number().integer();
const municipioId = Joi.number().integer();

const createPacienteSchema = Joi.object({
  tipoId: tipoId.required(),
  id: id.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  epsId: epsId.required(),
  regimenId: regimenId.required(),
  departamentoId: departamentoId.allow(null, ''),
  municipioId: municipioId.allow(null, ''),
});

module.exports = {
  createPacienteSchema,
};
