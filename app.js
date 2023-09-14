/* eslint-disable no-console */
const express = require('express');
const routerApi = require('./routes');

const {
  logErrors,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');

const PORT = 3000;

const app = express();

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Listen in port ${PORT}`);
});
