'use strict';

module.exports = {
  schedule: {
    immediate: true,
    type: 'worker',
  },
  async task(ctx) {
    const result = await ctx.curl('https://eggjs.org');
    console.log('task result', result.status);
    console.log('will kill master after 3s');
    setTimeout(() => {
      console.log('master pid', process.ppid);
      process.kill(process.ppid, 'SIGKILL');
    }, 3000);
  },
};
