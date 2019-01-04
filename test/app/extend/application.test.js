'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/extend/application.test.js', () => {

  it('should custom logger', () => {
    app.mockLog();

    const ctx = app.mockContext();
    ctx.logger.warn('this is a custom context logger');
    ctx.logger.write('origin write');

    // assert
    app.expectLog('this is a custom context logger');
    app.expectLog('origin write');
  });
});
