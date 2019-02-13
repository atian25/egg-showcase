'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });

  it('should GET /static/1.js', () => {
    return app.httpRequest()
      .get('/static/1.js')
      .expect(/console.log\('static'\)/)
      .expect(200);
  });

  it('should GET /public/2.js', () => {
    return app.httpRequest()
      .get('/public/2.js')
      .expect(/console.log\('public'\)/)
      .expect(200);
  });
});
