var copyfiles = require('copyfiles');

copyfiles(['./src/styles/*', './dist'], { up: 1 }, () =>
  console.log('\x1b[33m%s\x1b[0m', '=== Styles got copied ==='));