'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // pipe vs pipeline
  router.get('/stream_pipe', controller.stream.pipe);
  router.get('/stream_pipeline', controller.stream.pipeline);
};
