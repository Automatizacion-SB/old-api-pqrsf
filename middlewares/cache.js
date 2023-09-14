const getExpeditiousCache = require('express-expeditious');

const options = {
  namespace: 'expresscache',
  defaultTtl: '30 minutes',
  statusCodeExpires: {
    404: '11 minutes',
    500: 0,
  },
};

const cacheInit = getExpeditiousCache(options);

module.exports = { cacheInit };
