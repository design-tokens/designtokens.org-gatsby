const resources = require('../../src/dependencies');

const rule = {
  loader: 'sass-resources-loader',
  options: {
    resources,
    sourceMap: true,
  },
};

exports.rule = rule;
