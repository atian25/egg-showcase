'use strict';

const { app, assert, mock } = require('egg-mock/bootstrap');
const Controller = require('../../../app/core/controller');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    mock(Controller.prototype, 'echo', function(name) {
      this.ctx.body = `hi, mock ${name}`;
    });
    return app.httpRequest()
      .get('/')
      .expect('hi, mock egg')
      .expect(200);
  });
});
