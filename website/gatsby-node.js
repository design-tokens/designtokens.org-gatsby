/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const webpackStyleRules = require('./webpack-style-rules');

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [loaders.miniCssExtract(), ...webpackStyleRules],
        },
      ],
    },
  });
};
