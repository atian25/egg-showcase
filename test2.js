
'use strict';

const Test = require('./test1');

const { Session } = require('inspector');
const { promisify } = require('util');
const { mkdirp, rimraf } = require('mz-modules');
const path = require('path');
const fs = require('mz/fs');
const TestExclude = require('test-exclude');

const session = new Session();
session.post = promisify(session.post);

const filter = new TestExclude({
  include: [
    'file:**',
  ],
  exclude: [
    'internal/**',
  ],
});


async function run() {
  a();

  session.connect();
  await session.post('Profiler.enable');
  await session.post('Profiler.startPreciseCoverage', { callCount: true, detailed: true });

  b();

  // session.disconnect();
  const test = new Test();
  test.sayHi();
  test.sayHi2();
  test.sayHi();
  test.sayHi2();
  test.sayHi();

  c();

  // session.connect();
  const { result } = await session.post('Profiler.takePreciseCoverage');
  await session.post('Profiler.stopPreciseCoverage');
  await session.post('Profiler.disable');

  d();

  const baseDir = path.join(process.cwd(), 'coverage/tmp');
  const filePath = path.resolve(baseDir, `coverage-${process.pid}.json`);
  await rimraf(baseDir);
  await mkdirp(path.dirname(filePath));

  const dumpResult = [];
  for (const item of result) {
    if (!filter.shouldInstrument(item.url)) continue;
    // if (!item.url || !item.url.startsWith('file:')) continue;
    // const relativePath = path.relative(this.app.config.baseDir, fileURLToPath(item.url));
    // if (relativePath.startsWith('node_modules')) continue;
    if (item.url.includes('egg-coverage')) continue;
    if (item.url.includes('coverage.js')) continue;
    dumpResult.push(item);
  }

  await fs.writeFile(filePath, JSON.stringify({ result: dumpResult }, null, 2));
}

function a() {
  console.log('a');
}

function b() {
  console.log('b');
}

function c() {
  console.log('c');
}

function d() {
  console.log('d');
}

run().catch(console.error);
