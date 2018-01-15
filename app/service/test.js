'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  async echo() {
    return 'echo test';
  }
}

module.exports = TestService;
