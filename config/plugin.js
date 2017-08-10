'use strict';

const path = require('path');

exports.share = {
  path: path.join(__dirname, '../lib/plugin/share'),
};

const path = require('path');
const pluginDir = path.join(__dirname, '../lib/plugin');
exports.ejs = {
  path: path.join(pluginDir, 'egg-view-ejs'),
};
