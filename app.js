'use strict';
const path = require('path');

module.exports = app => {
  // 读取所有的 `app/db` 目录
  const directory = this.getLoadUnits().map(unit => path.join(unit.path, 'app/db'));
  // 挂载 `ctx.db.someClz.echo()`
  app.loader.loadToContext(directory, 'db');
};
