'use strict';

const replify = require('replify');

module.exports = app => {
  app.logger.info('load plugin share');
  app.messenger.once('egg-ready', () => {
    app.logger.info('init egg repl');
    // use `npm run console` to connect
    replify('egg-repl', app);
  });
};
