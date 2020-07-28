'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should assert', async () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // await ctx.service.xx();
  });

  it('should GET /', async () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });

  it.only('should upload with limit', async () => {
    return app.httpRequest()
      .post('/')
      .attach('bigfile', __dirname + '/bigfile.txt', 'bigfile.txt')
      .field('caption', 'My cats')
      .expect('Request file too large, please check multipart config, fileSize: 1mb')
      .expect(200);
  });

  it.only('should upload with limit 1024', async () => {
    return app.httpRequest()
      .post('/')
      .query('limit=1024')
      .attach('bigfile', __dirname + '/bigfile.txt', 'bigfile.txt')
      .field('caption', 'My cats')
      .expect('Request file too large, please check multipart config, fileSize: 1024')
      .expect(200);
  });

  it.only('should upload with limit 1024 pass', async () => {
    return app.httpRequest()
      .post('/')
      .query('limit=1024')
      .attach('small', Buffer.from('abc'), 'small.txt')
      .expect('small.txt')
      .expect(200);
  });
});
