'use strict';

module.exports = app => {
  const logger = app.loggers.get('dbLogger');
  let i = 0;
  setInterval(() => {
    logger.info(i++);
  }, 1000);
};
