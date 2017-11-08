'use strict';

const Service = require('egg').Service;

/**
 * provide news biz service
 */
class NewsService extends Service {
  /**
   * list news
   * @param {number} [page = 1] - page num, default to 1
   * @return {array} result
   */
  async list(page = 1) {
    console.log(page);
    return [ 'news1', 'news2' ];
  }
}

module.exports = NewsService;
