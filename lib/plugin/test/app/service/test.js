'use strict';

module.exports = app => {
  class TestService extends app.CustomService {
    sayHi() {
      return this.getName('test');
    }
  }
  return TestService;
};
