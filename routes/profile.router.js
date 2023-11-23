const express = require('express');
const passport = require('passport');

const PeticionService = require('../services/peticion.service');

const router = express.Router();
const service = new PeticionService();

router.get(
  '/mis-peticiones',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const { sub: user } = req.user;
      const peticiones = await service.findByUser(user);
      res.json(peticiones);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
