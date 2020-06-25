const resources = require('../../src/dependencies');

const rule = {
  loader: 'sass-resources-loader',
  options: {
    resources,
    sourceMap: true,
  },
};

exports.rule = rule;

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          ...rule,
        },
      ],
    },
  });
};
