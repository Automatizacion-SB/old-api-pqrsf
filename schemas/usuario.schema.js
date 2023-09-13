const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string().max(125);
const apellido = Joi.string().max(125);
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
const email = Joi.string().email();
const role = Joi.string().min(5);
const cargo = Joi.string().min(5);
const token = Joi.string().min(3).max(200);

const getUserSchema = Joi.object({
  id: id.required(),
});

const createUserSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  password: password.required(),
  email: email.required(),
  role: role.required(),
  cargo: cargo.required(),
});

const updateUserSchema = Joi.object({
  nombre,
  apellido,
  password,
  email,
  role,
  cargo,
});

const changePassword = Joi.object({
  newPassword: password.required(),
  token: token.required(),
});

module.exports = {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
  changePassword,
};
