'use strict';

const path = require('path');

module.exports = app => {
  const { router, controller, middleware } = app;

  const anotherStaticConfig = Object.assign({}, app.config.static, {
    prefix: '/static/',
    dir: path.join(app.config.baseDir, 'app/static'),
  });

  app.use(middleware.static(anotherStaticConfig, app));

  router.get('/', controller.home.index);
};
