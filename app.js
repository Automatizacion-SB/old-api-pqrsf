/* eslint-disable no-console */
const express = require('express');
const routerApi = require('./routes');

const PORT = 3000;

const app = express();

routerApi(app);

app.listen(PORT, () => {
  console.log(`🚀 Listen in port ${PORT}`);
});
