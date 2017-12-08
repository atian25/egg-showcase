'use strict';

const egg = require('egg');

class BaseController extends egg.Controller {
  echo(name) {
    this.ctx.body = `hi, ${name}`;
  }
}

module.exports = BaseController;
