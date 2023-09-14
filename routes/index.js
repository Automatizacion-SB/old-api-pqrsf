const express = require('express');

const peticionesRouter = require('./peticiones.router');
const pqrsfRouter = require('./pqrsf.router');
const referenciasRouter = require('./referencias.router');
const usuariosRouter = require('./usuarios.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);

  router
    .use('/peticiones', peticionesRouter)
    .use('/pqrsf', pqrsfRouter)
    .use('/referencias', referenciasRouter)
    .use('/usuarios', usuariosRouter)
    .use('/auth', authRouter)
    .use('/profile', profileRouter);
}

module.exports = routerApi;
