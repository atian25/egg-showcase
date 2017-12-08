'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1501832752131_9495';

  // add your config here
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
    },
  };

  config.security = {

  };

  config.customLogger = {
    dbLogger: {
      file: path.join(appInfo.root, 'logs/db.log'),
      formatter(meta) {
        return `${meta.level}|${meta.date}|${meta.message}`;
      },
    },
  };

  config.logrotator = {
    filesRotateBySize: [
      path.join(appInfo.root, 'logs/db.log'),
    ],
    maxFileSize: 1024,
  };

  return config;
};
