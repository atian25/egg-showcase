'use strict';

const Controller = require('../core/controller');

class HomeController extends Controller {
  async index() {
    this.echo('egg');
  }
}

module.exports = HomeController;
