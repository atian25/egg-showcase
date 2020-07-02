'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.rpc.test.sayHi('egg');
  }
}

module.exports = HomeController;
