const { rule } = require('./rule');

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
