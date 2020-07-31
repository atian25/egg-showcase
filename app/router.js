'use strict';

const stream = require('stream');
const { promisify } = require('util');
const pipeline = promisify(stream.pipeline);
const { writableNoopStream } = require('noop-stream');
// const sendToWormhole = require('stream-wormhole');
// const fs = require('fs');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/', async function(ctx) {
    const fileSize = ctx.query.limit || '1mb';
    let fileStream;
    try {
      fileStream = await ctx.getFileStream({
        limits: {
          fileSize,
        },
      });
      console.log(fileStream.filename, fileStream.fields);
      await pipeline(fileStream, writableNoopStream());
      ctx.body = fileStream.filename;
    } catch (err) {
      console.log('@@', fileSize, err);
      if (fileStream) await pipeline(fileStream, writableNoopStream());
      ctx.body = err.message + ', fileSize: ' + fileSize;
    }
  });
};
