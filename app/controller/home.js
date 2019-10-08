'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home.tpl', { name: 'egg' });
  }

  async edit() {
    const ctx = this.ctx;
    const req = ctx.request;
    const result = {
      action: 'edit',
      data: req.body,
      file: req.files && req.files[0] && req.files[0].filename,
    };

    console.log('edit', result);

    this.ctx.set('x-action', 'edit');
    this.ctx.body = result;
  }

  async proxy() {
    console.log('proxy', this.ctx.headers, this.ctx.request.body);

    const res = await this.ctx.curl(`${this.ctx.headers.host}/edit`, {
      method: 'POST',
      headers: {
        'content-type': this.ctx.get('content-type'),
      },
      // streaming: true,
      stream: this.ctx.req,
      dataType: 'json',
    });

    this.ctx.body = res.data;
    this.ctx.set(res.headers);
  }

  async upload() {
    const { ctx } = this;
    console.log(ctx.request.body);
    console.log('got %d files', ctx.request.files.length);

    try {
      // 遍历处理多个文件
      for (const file of ctx.request.files) {
        console.log('field: ' + file.fieldname);
        console.log('filename: ' + file.filename);
        console.log('encoding: ' + file.encoding);
        console.log('mime: ' + file.mime);
        console.log('tmp filepath: ' + file.filepath);

        // 处理文件，比如上传到云端
        // const result = await ctx.oss.put('egg-multipart-test/' + file.filename, file.filepath);
        // console.log(result);
      }
    } finally {
      // 需要删除临时文件
      await ctx.cleanupRequestFiles();
    }
  }
}

module.exports = HomeController;
