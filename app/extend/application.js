'use strict';

const { EggLogger } = require('egg-logger');

module.exports = {
  getSubLogger(name) {
    let logger = this.loggers.get(name);
    if (logger) return logger;

    // merge: config.logger <- config.subLogger
    const options = Object.assign({}, this.config.logger, this.config.subLogger, {
      file: `custom-${name}.log`,
    });

    // monkey patch to add meta info
    if (options.formatter) {
      const originFn = options.formatter;
      options.formatter = meta => {
        meta.logName = name;
        return originFn(meta);
      };
    }

    // monkey patch to add meta info
    if (options.contextFormatter) {
      const originFn = options.contextFormatter;
      options.contextFormatter = meta => {
        meta.logName = name;
        return originFn(meta);
      };
    }

    // add to loggers so logrotator will handler it
    logger = new EggLogger(options);
    this.loggers.set(name, logger);
    return logger;
  },
};
