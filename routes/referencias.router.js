const express = require('express');
const { ReferenciaService } = require('../services/referencia.service');

const router = express.Router();
const service = new ReferenciaService();

router

  .get('/tipos_identificacion', async (req, res, next) => {
    try {
      const referencias = await service.findTiposIdentificacion();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/eps', async (req, res, next) => {
    try {
      const referencias = await service.findEps();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/regimenes', async (req, res, next) => {
    try {
      const referencias = await service.findRegimenes();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/servicios', async (req, res, next) => {
    try {
      const referencias = await service.findServicios();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/canales', async (req, res, next) => {
    try {
      const referencias = await service.findCanales();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/clases_peticion', async (req, res, next) => {
    try {
      const referencias = await service.findClasesPeticion();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/tipos_peticion', async (req, res, next) => {
    try {
      const referencias = await service.findTiposPeticion();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/complejidades', async (req, res, next) => {
    try {
      const referencias = await service.findComplejidad();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/areas', async (req, res, next) => {
    try {
      const referencias = await service.findAreas();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/estados', async (req, res, next) => {
    try {
      const referencias = await service.findEstados();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/calidad', async (req, res, next) => {
    try {
      const referencias = await service.findCalidad();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/departamentos', async (req, res, next) => {
    try {
      const referencias = await service.findDepartamos();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
