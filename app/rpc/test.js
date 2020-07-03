'use strict';

module.exports = class TestRpc {
  constructor(ctx) {
    this.ctx = ctx;
    this.config = ctx.app.config;
    this.logger = ctx.logger;
  }

  async sayHi(name) {
    return `hi, ${name}`;
  }
};
