'use strict';

module.exports = class AppBoot {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    // TODO: 移到更前面
    this.app.coverage.init();
    await this.app.coverage.clean();
    await this.app.coverage.start();

    const dump = async () => {
      await this.app.coverage.collect();
      await this.app.coverage.dump();
    };

    this.app.messenger.on('coverage-dump', () => {
      dump().catch(err => this.app.logger.warn(err));
    });
  }

  async beforeClose() {
    // do sth before app close
  }
};
