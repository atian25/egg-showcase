'use strict';

class ContextLogger {
  /**
   * @constructor
   * @param {Context} ctx - egg Context instance
   * @param {Logger} logger - Logger instance
   */
  constructor(ctx, logger) {
    this.ctx = ctx;
    this._logger = logger;
  }

  write(msg) {
    this._logger.write(msg);
  }

  contextFormatter(meta) {
    const { ctx, date, level, pid, message } = meta;
    return `[${date}] [${pid}] [${level}] [${ctx.url}] ${message}`;
  }
}

[ 'error', 'warn', 'info', 'debug' ].forEach(level => {
  const LEVEL = level.toUpperCase();
  ContextLogger.prototype[level] = function() {
    const meta = {
      ctx: this.ctx,
      formatter: this._logger.options.contextFormatter || this.contextFormatter,
    };
    this._logger.log(LEVEL, arguments, meta);
  };
});

module.exports = {
  // override built-in context logger
  // see https://github.com/eggjs/egg-logger/blob/master/lib/egg/context_logger.js
  // and https://github.com/eggjs/egg/blob/master/app/extend/context.js#L100
  ContextLogger,
};

