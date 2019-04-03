'use strict';

module.exports = {
  getSubLogger(name) {
    // ensure the sub logger is created
    this.app.getSubLogger(name);
    return this.getLogger(name);
  },
};
