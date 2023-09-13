const express = require('express');
const PqrsfService = require('../services/pqrsf.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const {
  getPeticionSchema,
  createPQRSFSchema,
} = require('../schemas/peticion.schema');

const service = new PqrsfService();
const router = express.Router();

router
  .get('/', async (req, res, next) => {
    try {
      const peticiones = await service.find();

      res.json(peticiones);
    } catch (error) {
      next(error);
    }
  })

  .get(
    '/:id',
    validatorHandler(getPeticionSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;

        const peticion = await service.findOne(id);

        res.json(peticion);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/',
    validatorHandler(createPQRSFSchema, 'body'),
    async (req, res, next) => {
      try {
        const { body } = req;

        const peticionCreada = await service.create(body);

        res.json(peticionCreada);
      } catch (error) {
        next(error);
      }
    },
  )

  .delete(
    '/:id',
    validatorHandler(getPeticionSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;

        const peticionBorrada = await service.delete(id);

        res.json(peticionBorrada);
      } catch (error) {
        next(error);
      }
    },
  );

module.exports = router;
