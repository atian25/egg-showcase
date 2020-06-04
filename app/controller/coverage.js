'use strict';

const { Controller } = require('egg');

class CoverageController extends Controller {
  async dump() {
    this.app.messenger.sendToApp('coverage-dump');
    // await this.app.coverage.dump();
    this.ctx.status = 204;
  }
}

module.exports = CoverageController;
