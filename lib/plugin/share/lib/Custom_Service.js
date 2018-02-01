'use strict';

const Service = require('egg').Service;

module.exports = class CustomService extends Service {
  getName(name) {
    return 'hi, ' + name;
  }
};
