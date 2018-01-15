'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home.tpl', { name: 'egg' + this.ctx.helper.test() });
  }
}

module.exports = HomeController;
