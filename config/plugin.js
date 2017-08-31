'use strict';

const path = require('path');

exports.share = {
  path: path.join(__dirname, '../lib/plugin/share'),
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
