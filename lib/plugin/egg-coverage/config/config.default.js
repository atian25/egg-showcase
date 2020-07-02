'use strict';

module.exports = appInfo => {
  const config = {};

  config.coverage = {
    dir: `${appInfo.baseDir}/coverage/tmp`,
  };

  return config;
};
