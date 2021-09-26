'use strict';

const zlib = require('zlib');
const fs = require('fs');
const { PassThrough } = require('stream');
const { pipeline } = require('stream/promises');
const Controller = require('egg').Controller;

class StreamController extends Controller {
  async pipe() {
    const { ctx } = this;

    const pass = new PassThrough();
    ctx.set('content-type', 'text');

    fs.createReadStream(__filename)
      .pipe(zlib.createGunzip())
      // 1. 有 error 事件侦听，pipe 阶段出错仍会导致进程卡住
      // 2. 如果没有这个 error 事件侦听，app worker died
      .on('error', err => ctx.logger.error(`pipe failed: ${err}`))
      .pipe(pass);

    ctx.body = pass;
  }

  async pipeline() {
    const { ctx } = this;

    const pass = new PassThrough();
    ctx.set('content-type', 'text');

    // pipeline 可以比较方便处理 pipe 过程中的异常
    try {
      await pipeline(
        fs.createReadStream(__filename),
        zlib.createGunzip(),
        pass
      );

      ctx.body = pass;
    } catch (err) {
      ctx.body = { ok: false, message: err.message };
    }
  }
}

module.exports = StreamController;
