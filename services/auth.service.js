const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('./../config/config');
const UsuarioService = require('./usuario.service');
const service = new UsuarioService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw boom.unauthorized();

    delete user.dataValues.password;
    delete user.dataValues.recoveryToken;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }
  async sendMail(message) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });

    await transporter.sendMail(message);

    return { message: 'email enviado exitosamente' };
  }

  async sendRecoveryPassword(email) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();

    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });

    const link = `http://localhost:3020/recovery?token=${token}`;

    await service.update(user.id, {
      recoveryToken: token,
    });

    const message = {
      from: config.smtpEmail,
      to: `${user.email}`,
      subject: 'Recuperar contraseña | Sistema PQRSF',
      html: `<p>Ingresa al siguiente link para recuperar tu contraseña: ${link}</p>`,
    };

    const result = await this.sendMail(message);

    return result;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);

      if (user.recoveryToken != token) throw boom.unauthorized();

      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, {
        password: hash,
        recoveryToken: null,
      });

      return {
        message: 'contraseña cambiada exitosamente',
      };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendNotificacionPeticion(peticion) {
    const { liderId, motivo, fechaEnvioResponsableArea } = peticion;

    const lider = await service.findOne(liderId);

    const message = {
      from: config.smtpEmail,

      to: `${lider.email}`,

      subject: 'Nueva PQRSF asignada',

      html: `
      <body>
        <p>Buenas tardes, ${lider.nombre} ${lider.apellido}</p>
        <p>
          Se le informa que tiene una nueva PQRSF asignada pendiente por dar respuesta
        </p>
        <hr />
        <h3>Información relevante de la PQRSF</h3>
        <p>Motivo: ${motivo}</p>
        <p>Fecha de envió: ${fechaEnvioResponsableArea}</p>
      </body>
      `,
    };

    await this.sendMail(message);
  }
}

module.exports = AuthService;
