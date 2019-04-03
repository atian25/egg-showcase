'use strict';

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
    // only for test purpose
    csrf: {
      enable: false,
    },
  };

  // custom sub logger config
  config.subLogger = {
    level: 'INFO',
    formatter(meta) {
      return `[${meta.logName}] ${meta.message}`;
    },
    contextFormatter(meta) {
      return `[${meta.logName}] [Context] ${meta.message}`;
    },
  };

  return config;
};
