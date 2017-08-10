'use strict';

const ejs = require('ejs');
const path = require('path');

exports.render = async function(tpl, locals) {
  const root = path.join(this.app.config.baseDir, 'app/view');

  this.body = await new Promise((resolve, reject) => {
    const filePath = path.join(root, tpl);
    ejs.renderFile(filePath, locals, (err, html) => {
      if (err) return reject(err);
      return resolve(html);
    });
  });
};
