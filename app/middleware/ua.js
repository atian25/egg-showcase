'use strict';

module.exports = () => {
  return async function UA (ctx, next) {
    ctx.isMobile = true;
    await next();
  }
};
