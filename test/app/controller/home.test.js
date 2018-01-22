'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    app.get('/test/a', async (ctx, next) => {
      ctx.somekey = 2333;
      await next();
    }, app.controller.home.index);

    return app.httpRequest()
      .get('/test/a')
      .expect('hi, egg2333')
      .expect(200);
  });
});
