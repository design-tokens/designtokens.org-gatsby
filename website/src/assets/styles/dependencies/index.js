const path = require('path');

// These files are automatically imported in .scss files
module.exports = [
  path.resolve(__dirname, '_variables.scss'),
  path.resolve(__dirname, '_mq.scss'),
  path.resolve(__dirname, '_functions.scss'),
  path.resolve(__dirname, '_mixins.scss'),
];
