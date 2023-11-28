const express = require('express');
const PeticionService = require('../services/peticion.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const {
  getPeticionSchema,
  createPeticionSchema,
  updatePeticionSchema,
  addItemSchema,
  queryParamsSchema,
  exportDataParamsScheme,
} = require('../schemas/peticion.schema');
const passport = require('passport');
const { checkRole } = require('../middlewares/auth.handler');

const router = express.Router();
const service = new PeticionService();

router
  .get(
    '/',
    passport.authenticate('jwt', { session: false }),
    checkRole('atencion', 'lider'),
    validatorHandler(queryParamsSchema, 'query'),
    async (req, res, next) => {
      try {
        const peticiones = await service.find(req.query);

        res.json(peticiones);
      } catch (error) {
        next(error);
      }
    },
  )

  .get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    checkRole('atencion', 'lider'),
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
    '/export/xlsx',
    passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    validatorHandler(exportDataParamsScheme, 'body'),
    async (req, res, next) => {
      try {
        const peticion = await service.exportPeticiones(req.body);

        res.json(peticion);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/',
    passport.authenticate('jwt', { session: false }),
    checkRole('atencion'),
    validatorHandler(createPeticionSchema, 'body'),
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

  .post(
    '/temporal',
    // passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    // validatorHandler(createPeticionSchema, 'body'),
    async (req, res, next) => {
      try {
        const { body } = req;

        const peticionCreada = await service.createTemporal(body);

        res.json(peticionCreada);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/add-item',
    passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    validatorHandler(addItemSchema, 'body'),
    async (req, res, next) => {
      try {
        const { body } = req;

        const peticionCreada = await service.addItem(body);

        res.json(peticionCreada);
      } catch (error) {
        next(error);
      }
    },
  )

  .patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    checkRole('atencion', 'lider'),
    validatorHandler(getPeticionSchema, 'params'),
    validatorHandler(updatePeticionSchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const { body } = req;

        const peticionActualizada = await service.update(id, body);

        res.json(peticionActualizada);
      } catch (error) {
        next(error);
      }
    },
  )

  .delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    checkRole('atencion'),
    validatorHandler(getPeticionSchema, 'body'),
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
