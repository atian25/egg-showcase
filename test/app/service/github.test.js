'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/github.test.js', () => {
  it('listByOrgs', async () => {
    const ctx = app.mockContext();
    const result = await ctx.service.github.listReposByOrg('eggjs');
    assert(result.length === 10);
    assert(result[0].name.includes('egg'));
  });
});
