'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  app.resources('adminUrls', '/admin/url', controller.admin);
};
