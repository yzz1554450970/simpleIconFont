const yargs = require('yargs');


yargs // eslint-disable-line
  .command(
    'fetch',
    'fech icons from iconfont',
    {},
    () => {
      require('./fetch')();
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
