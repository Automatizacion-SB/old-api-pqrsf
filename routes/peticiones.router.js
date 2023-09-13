const express = require('express');

const router = express.Router();

router
  .get('/', async (req, res, next) => {
    try {
      const peticiones = 'hola';

      res.json(peticiones);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;

      const peticion = 'hola' + id;

      res.json(peticion);
    } catch (error) {
      next(error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const { body } = req;

      const peticionCreada = body;

      res.json(peticionCreada);
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;

      const peticionActualizada = { id, ...body };

      res.json(peticionActualizada);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;

      const peticionBorrada = 'borrado' + id;

      res.json(peticionBorrada);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
