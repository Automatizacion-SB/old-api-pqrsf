const express = require('express');
const passport = require('passport');

const { validatorHandler } = require('../middlewares/validator.handler');
const { changePassword } = require('../schemas/usuario.schema');
const AuthService = require('../services/auth.service');

const service = new AuthService();
const router = express.Router();

router
  .post(
    '/login',
    passport.authenticate('local', { session: false }),
    async (req, res, next) => {
      try {
        const user = req.user;

        res.json(service.signToken(user));
      } catch (error) {
        next(error);
      }
    },
  )

  .post('/recovery', async (req, res, next) => {
    try {
      const { email } = req.body;
      const result = await service.sendRecoveryPassword(email);

      res.json(result);
    } catch (error) {
      next(error);
    }
  })

  .post(
    '/change-password',
    validatorHandler(changePassword, 'body'),
    async (req, res, next) => {
      try {
        const { token, newPassword } = req.body;
        const result = await service.changePassword(token, newPassword);

        res.json(result);
      } catch (error) {
        next(error);
      }
    },
  );

module.exports = router;
