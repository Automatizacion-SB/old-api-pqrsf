/* eslint-disable no-console */
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Listen in port ${PORT}`);
});
