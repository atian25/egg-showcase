'use strict';
const path = require('path');

module.exports = app => {
  // https://github.com/eggjs/egg-core/blob/master/lib/loader/mixin/controller.js#L14
  app.loader.loadController({
    directory: app.loader.getLoadUnits().map(unit => path.join(unit.path, 'app/controller')),
  });

  const { router, controller } = app;
  console.log(controller);

  router.get('/', controller.home.index);
  router.get('/test', controller.test.echo);
};
