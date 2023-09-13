const express = require('express');

const router = express.Router();

router

  .get('/tipos_identificacion', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/eps', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/regimenes', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/servicios', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/canales', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/clases_peticion', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/tipos_peticion', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/complejidades', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/areas', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/estados', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/calidad', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  })

  .get('/departamentos', async (req, res, next) => {
    try {
      const referencias = 'referencia';

      res.json(referencias);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
