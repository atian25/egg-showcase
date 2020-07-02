'use strict';

const COV = Symbol('Application#coverage');
const Coverage = require('../../lib/coverage');

module.exports = {
  get coverage() {
    if (!this[COV]) {
      this[COV] = new Coverage(this);
    }
    return this[COV];
  },
};
