'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/edit', controller.home.edit);
  router.post('/proxy', controller.home.proxy);
  router.post('/upload', controller.home.upload);
};
