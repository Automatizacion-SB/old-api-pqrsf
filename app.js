/* eslint-disable no-console */
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

// const { config } = require('./config/config');
const {
  logErrors,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');

// const PORT = config.port;

const app = express();

app.use(express.json());

const corsOptions = {
  // solo permitimos peticiones de esta dirección
  origin: 'http://172.16.1.17:3025',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

require('./utils/auth');

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Listen in port ${process.env.PORT}`);
});
