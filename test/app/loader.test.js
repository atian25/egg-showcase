'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/loader.test.js', () => {

  it('should load enum', async () => {
    assert(app.enum.error.ERR_AUTH.msg === 'not perm');
  });

  it('should load utils', async () => {
    assert(app.utils.formatter.random(10) < 10);
  });

  it('should load rpc', async () => {
    const ctx = app.mockContext();
    const result = await ctx.rpc.test.sayHi('tz');
    assert(result === 'hi, tz');
  });

});
