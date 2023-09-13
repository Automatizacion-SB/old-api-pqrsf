const express = require('express');
const UsuarioService = require('../services/usuario.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require('../schemas/usuario.schema');

const router = express.Router();
const service = new UsuarioService();

router
  .get('/', async (req, res, next) => {
    try {
      const usuario = await service.find();

      res.json(usuario);
    } catch (error) {
      next(error);
    }
  })

  .get(
    '/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;

        const usuarios = await service.findOne(id);

        res.json(usuarios);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
      try {
        const { body } = req;

        const usuarioCreado = await service.create(body);

        res.json(usuarioCreado);
      } catch (error) {
        next(error);
      }
    },
  )

  .patch(
    '/:id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const { body } = req;

        const usuarioActualizado = await service.update(id, body);

        res.json(usuarioActualizado);
      } catch (error) {
        next(error);
      }
    },
  )

  .delete(
    '/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;

        const usuarioBorrado = await service.delete(id);

        res.json(usuarioBorrado);
      } catch (error) {
        next(error);
      }
    },
  );

module.exports = router;
