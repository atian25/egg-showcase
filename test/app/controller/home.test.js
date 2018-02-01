'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    const ctx = app.mockContext({});
    assert(ctx.service.share.sayHi() === 'hi, share');
    assert(ctx.service.test.sayHi() === 'hi, test');
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });
});
