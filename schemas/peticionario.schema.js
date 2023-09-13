/* eslint-disable no-unused-vars */
const Joi = require('joi');

const tipoId = Joi.string().uppercase().max(2);
const id = Joi.string().alphanum().max(17);
const nombre = Joi.string().max(255);
const apellido = Joi.string().max(255);
const email = Joi.string().email();
const telefono = Joi.string().alphanum().max(10);

const createPeticionarioSchema = Joi.object({
  tipoId: tipoId.required(),
  id: id.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  email: email.allow(null, ''),
  telefono: telefono.allow(null, ''),
});

module.exports = {
  createPeticionarioSchema,
};
