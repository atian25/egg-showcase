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

  it('POST file', () => {
    return app.httpRequest()
      .post('/proxy')
      .field('field1', 'f1')
      .attach('file', path.join(__dirname, '../../../package.json'))
      .expect({ action: 'edit', data: { field1: 'f1' }, file: 'package.json' })
      .expect(200);
  });

  it('POST json', () => {
    return app.httpRequest()
      .post('/proxy')
      .send({ field1: 'f1' })
      .expect({ action: 'edit', data: { field1: 'f1' } })
      .expect(200);
  });
});
