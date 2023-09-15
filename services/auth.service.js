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
    // const user = await service.findByEmail(email);
    // if (!user) throw boom.unauthorized();

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

    const link = `http://myfront.com/recovery?token=${token}
    con el token ${token}`;

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
}

module.exports = AuthService;
