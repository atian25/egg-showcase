'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.ctx.service.test.echo();
    await this.ctx.render('home.tpl', { name: result || 'egg' });
  }
}

module.exports = HomeController;
