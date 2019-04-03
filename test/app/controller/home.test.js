'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const { fs } = require('mz');
const path = require('path');
const moment = require('moment');

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

  it('should write to custom logger', async () => {
    await app.httpRequest().get('/?logName=logger1&content=just_a_test');
    await app.httpRequest().get('/?logName=logger2&content=just_another_test');

    let content = await fs.readFile(path.join(__dirname, '../../../logs/showcase/custom-logger1.log'), 'utf-8');
    assert(content.includes('[logger1] just_a_test'));
    assert(content.includes('[logger1] [Context] just_a_test'));

    content = await fs.readFile(path.join(__dirname, '../../../logs/showcase/custom-logger2.log'), 'utf-8');
    assert(content.includes('just_another_test'));
    assert(content.includes('[logger2] [Context] just_another_test'));
  });

  it('should rotate custom logger', async () => {
    await app.httpRequest().get('/?logName=logger3&content=just_a_rotate_test');
    let content = await fs.readFile(path.join(__dirname, '../../../logs/showcase/custom-logger3.log'), 'utf-8');
    assert(content.includes('just_a_rotate_test'));

    const job = require.resolve('egg-logrotator/app/schedule/rotate_by_file.js');
    await app.runSchedule(job);

    await app.httpRequest().get('/?logName=logger3&content=just_a_new_rotate_test');

    const fileName = `custom-logger3.log${moment().subtract(23, 'hours').subtract(58, 'minutes')
      .format('.YYYY-MM-DD')}`;
    content = await fs.readFile(path.join(__dirname, '../../../logs/showcase/', fileName), 'utf-8');
    assert(content.includes('just_a_rotate_test'));
    assert(!content.includes('just_a_new_rotate_test'));

    content = await fs.readFile(path.join(__dirname, '../../../logs/showcase/custom-logger3.log'), 'utf-8');
    assert(content.includes('just_a_new_rotate_test'));
  });
});
