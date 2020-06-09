'use strict';

const Test = require('./test1')

module.exports = app => {
  console.log(app.config.env);

  setTimeout(() => {
    console.log('init');
    new Test();
  }, 3000);
};

