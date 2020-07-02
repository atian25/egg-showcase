'use strict';

const { Service } = require('egg');

module.exports = class TestService extends Service {
  async sayHi() {
    console.log('xx');
  }

  async sayHi2() {
    console.log('xx2');
  }
}
