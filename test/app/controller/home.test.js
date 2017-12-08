'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', function* () {
    yield app.httpRequest()
      .get('/')
      .expect(/adminUrls: \/admin\/url/)
      .expect(200);

    yield app.httpRequest()
      .get('/admin/url')
      .expect(/hi resource/)
      .expect(200);
  });
});
