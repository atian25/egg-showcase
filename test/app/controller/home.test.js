'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  it('should GET /', async () => {
    const response = await app.httpRequest().get('/').query({ org: 'eggjs' });
    assert(response.status === 200);
    assert(response.body.length === 10);
    assert(response.body[0].name.includes('egg'));
  });
});
