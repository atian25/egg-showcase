'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const { service, query } = this.ctx;
    ctx.body = await service.user.sayHi(query.name || 'egg');
  }

  async echo() {
    this.service.news.list();
    this.service.game.list();
  }
}

module.exports = HomeController;
