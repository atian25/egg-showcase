'use strict';

const inspector = require('inspector');
const { fs } = require('mz');
const path = require('path');
const { mkdirp, rimraf } = require('mz-modules');
const { promisify } = require('util');
const TestExclude = require('test-exclude');

class Coverage {
  constructor(app) {
    this.app = app;
    this.session = undefined;
    this.result = [];
    this.filter = new TestExclude({
      include: [
        'file:**',
      ],
      exclude: [
        'internal/**',
      ],
    });
    // TODO: typescript
  }

  init() {
    this.session = new inspector.Session();
    this.session.connect();
    this.session.post = promisify(this.session.post);
  }

  async start() {
    this.app.logger.info('[Coverage] Profiler.enable');
    await this.session.post('Profiler.enable');

    this.app.logger.info('[Coverage] Profiler.startPreciseCoverage');
    await this.session.post('Profiler.startPreciseCoverage', { callCount: true, detailed: true });
  }

  async collect() {
    this.app.logger.info('[Coverage] Profiler.takePreciseCoverage');
    const { result } = await this.session.post('Profiler.takePreciseCoverage');

    this.result = [];
    for (const item of result) {
      if (!this.filter.shouldInstrument(item.url)) continue;
      // if (!item.url || !item.url.startsWith('file:')) continue;
      // const relativePath = path.relative(this.app.config.baseDir, fileURLToPath(item.url));
      // if (relativePath.startsWith('node_modules')) continue;
      if (item.url.includes('egg-coverage')) continue;
      if (item.url.includes('coverage.js')) continue;
      this.result.push(item);
    }
  }

  async dump(filePath) {
    filePath = path.resolve(this.app.config.coverage.dir, filePath || `coverage-${process.pid}-${Date.now()}.json`);
    await mkdirp(path.dirname(filePath));

    this.app.logger.info(`[Coverage] dump to ${filePath}`);
    await fs.writeFile(filePath, JSON.stringify({ result: this.result }));
  }

  async clean() {
    await rimraf(this.app.config.coverage.dir);
  }
}

module.exports = Coverage;
