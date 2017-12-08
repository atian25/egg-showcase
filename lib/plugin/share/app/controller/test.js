'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async echo() {
    this.ctx.body = 'plugin controller';
  }
}

module.exports = TestController;
