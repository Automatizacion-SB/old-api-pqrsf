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
app.use(cors());

require('./utils/auth');

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Listen in port ${process.env.PORT}`);
});
