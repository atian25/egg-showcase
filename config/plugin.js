'use strict';

// had enabled by egg
// exports.static = true;

const path = require('path');

exports.share = {
  path: path.join(__dirname, '../lib/plugin/share'),
};
