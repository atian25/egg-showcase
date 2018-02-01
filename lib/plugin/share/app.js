'use strict';

module.exports = app => {
  app.logger.info('load plugin share');
  app.CustomService = require('./lib/Custom_Service');
};
