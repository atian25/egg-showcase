'use strict';

module.exports = app => {
  class ShareService extends app.CustomService {
    sayHi() {
      return this.getName('share');
    }
  }
  return ShareService;
};
