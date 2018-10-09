'use strict';

module.exports = app => {
  app.messenger.on('egg-ready', info => {
    console.log(info, app.server.address().port);
  });
};
