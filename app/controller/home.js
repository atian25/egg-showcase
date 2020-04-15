'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home.tpl', { name: 'egg' });
  }

  async upload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream({ limits: { fileSize: '1kb' } });
    console.log(stream.filename, stream.fields)
    ctx.body = ctx.request.body;
  }

  async upload2() {
    const { ctx } = this;
    const stream = await ctx.getFileStream({ limits: { fileSize: '100kb' } });
    console.log(stream.filename, stream.fields)
    ctx.body = ctx.request.body;
  }
}

module.exports = HomeController;
