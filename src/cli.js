const yargs = require('yargs');


yargs // eslint-disable-line
  .command(
    'get',
    'get icons from iconfont',
    {},
    () => {
      require('./get')();
    },
  )
  .command(
    'display',
    'open brower at project in iconfont',
    {},
    () => {
      require('./display')();
    },
  )
  .argv;
