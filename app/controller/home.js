'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home.tpl', { name: this.app.config.test || 'egg' });
  }
}

module.exports = HomeController;
