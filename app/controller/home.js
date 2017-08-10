'use strict';

// app/controller/home.js
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { query, service } = this.ctx;
    const org = query.org || 'eggjs';
    // this.ctx.body = await service.github.listReposByOrg(org);
    const data = await service.github.listReposByOrg(org);
    await this.ctx.render('home.tpl', { org, data });
  }
}
module.exports = HomeController;
