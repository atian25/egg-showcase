'use strict';

const path = require('path');

/** @type Egg.EggPlugin */
module.exports = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  share: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/share'),
  },
  myLoader: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/loader'),
  },
};
