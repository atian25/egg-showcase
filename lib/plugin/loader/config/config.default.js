'use strict';

exports.customLoader = {
  enum: {
    directory: 'app/enum',
  },

  utils: {
    directory: 'app/utils',
    inject: 'app',
  },

  rpc: {
    directory: 'app/rpc',
    inject: 'ctx',
    loadunit: true,
  },
};
