'use strict';

const Service = require('egg').Service;

/**
 * provide user biz service
 */
class UserService extends Service {
  /**
   * say hi to user
   * @param {string} name - user name
   * @return {string} result string
   */
  async sayHi(name) {
    return `hi, ${name}`;
  }

  /**
   * echo
   * @param {string} str - input
   * @return {string} result string
   */
  async echo(str) {
    return str;
  }
}

module.exports = UserService;
