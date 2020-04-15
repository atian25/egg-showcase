'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const path = require('path');

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

  it.only('should upload fail', () => {
    return app.httpRequest()
      .post('/upload')
      .field('caption', 'My cats')
      .attach('file', path.join(__dirname, '../../fixtures/bigfile.json'), 'bigfile.json')
      .expect(413);
  });

  it.only('should upload success', () => {
    return app.httpRequest()
      .post('/upload2')
      .field('caption', 'My cats')
      .attach('file', path.join(__dirname, '../../fixtures/bigfile.json'), 'bigfile.json')
      .expect(200);
  });
});
