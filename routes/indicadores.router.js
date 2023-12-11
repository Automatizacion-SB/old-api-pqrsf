const express = require('express');

const indicadoresService = require('../services/indicadores.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const { exportDataParamsScheme } = require('../schemas/peticion.schema');
const passport = require('passport');
// const { checkRole } = require('../middlewares/auth.handler');

const router = express.Router();
const service = new indicadoresService();

router
  .post(
    '/por_tipo',
    passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    validatorHandler(exportDataParamsScheme, 'body'),
    async (req, res, next) => {
      try {
        const peticion = await service.findForTipoSolicitudes(req.body);

        res.json(peticion);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/por_servicio',
    passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    validatorHandler(exportDataParamsScheme, 'body'),
    async (req, res, next) => {
      try {
        const peticion = await service.findForServicio(req.body);

        res.json(peticion);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/por_eps',
    passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    validatorHandler(exportDataParamsScheme, 'body'),
    async (req, res, next) => {
      try {
        const peticion = await service.findForEps(req.body);

        res.json(peticion);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/promedio_respuesta',
    passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    validatorHandler(exportDataParamsScheme, 'body'),
    async (req, res, next) => {
      try {
        const peticion = await service.findPromedioRespuesta(req.body);

        res.json(peticion);
      } catch (error) {
        next(error);
      }
    },
  )

  .post(
    '/por_tipo_y_eps',
    passport.authenticate('jwt', { session: false }),
    // checkRole('atencion'),
    validatorHandler(exportDataParamsScheme, 'body'),
    async (req, res, next) => {
      try {
        const peticion = await service.findForEpsAndType(req.body);

        res.json(peticion);
      } catch (error) {
        next(error);
      }
    },
  );

module.exports = router;
