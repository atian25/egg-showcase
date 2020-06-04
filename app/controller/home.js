'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home.tpl', { name: 'egg' });
  }

  async test() {
    this.ctx.body = 'test';
  }
}

module.exports = HomeController;
