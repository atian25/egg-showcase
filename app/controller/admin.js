'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    this.ctx.body = 'hi resource';
  }

  async new() {
    this.ctx.body = 'hi resource new';
  }
}

module.exports = AdminController;
