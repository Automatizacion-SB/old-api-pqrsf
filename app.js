/* eslint-disable no-console */
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErrors,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');
const { config } = require('dotenv');

const PORT = config.port;

const app = express();

app.use(express.json());
app.use(cors);

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Listen in port ${PORT}`);
});
