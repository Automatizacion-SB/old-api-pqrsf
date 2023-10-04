const express = require('express');
const { ReferenciaService } = require('../services/referencia.service');
const { cacheInit } = require('../middlewares/cache');

const router = express.Router();
const service = new ReferenciaService();

router

  .get('/tipos_identificacion', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findTiposIdentificacion();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/eps', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findEps();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/regimenes', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findRegimenes();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/servicios', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findServicios();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/canales', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findCanales();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/clases_peticion', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findClasesPeticion();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/tipos_peticion', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findTiposPeticion();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/complejidades', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findComplejidad();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/areas', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findAreas();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/estados', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findEstados();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/calidad', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findCalidad();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/departamentos', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findDepartamos();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/departamentos/:id/municipios', cacheInit, async (req, res, next) => {
    try {
      const { id } = req.params;
      const referencias = await service.findMunicipiosByDepartamento(id);

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })
  .get('/derechos_paciente', cacheInit, async (req, res, next) => {
    try {
      const referencias = await service.findDerechos();

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
