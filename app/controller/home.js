'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { logName, content } = this.ctx.query;
    if (logName) {
      const logger = this.app.getSubLogger(logName);
      logger.info(content);

      const contextLogger = this.ctx.getSubLogger(logName);
      contextLogger.info(content);
    }

    await this.ctx.render('home.tpl', { name: 'egg' });
  }
}

module.exports = HomeController;
