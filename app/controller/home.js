'use strict';

const Controller = require('egg').Controller;
const Excel = require('exceljs');
const { PassThrough } = require('stream');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    // create excel
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('TZ');
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 32 },
      { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 },
    ];
    worksheet.addRow([ 3, 'Sam', new Date() ]);

    // set download header
    ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    ctx.set('Content-Disposition', 'attachment; filename=download.xlsx');
    ctx.status = 200;

    // write to body
    ctx.body = new PassThrough();
    await workbook.xlsx.write(ctx.body);
  }
}

module.exports = HomeController;
