'use strict';

module.exports = {
  echo() {
    return 'echo';
  },
  test() {
    return 'test' + this.echo();
  },
};
