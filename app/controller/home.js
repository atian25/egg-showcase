'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('##', this.ctx.helper.pathFor('adminUrls'));
    console.log('##', this.ctx.helper.pathFor('new_adminUrl'));

    await this.ctx.render('home.tpl', { name: 'egg' });
  }
}

module.exports = HomeController;
