const express = require('express');
const router = express.Router();

router
  .get('/', async (req, res, next) => {
    try {
      const usuario = 'hola';

      res.json(usuario);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;

      const usuarios = 'hola' + id;

      res.json(usuarios);
    } catch (error) {
      next(error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const { body } = req;

      const usuarioCreado = body;

      res.json(usuarioCreado);
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;

      const usuarioActualizado = { id, ...body };

      res.json(usuarioActualizado);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;

      const usuarioBorrado = 'borrado' + id;

      res.json(usuarioBorrado);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
