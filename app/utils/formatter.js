'use strict';

module.exports = class Formatter {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.logger = app.logger;
  }

  random(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
};
