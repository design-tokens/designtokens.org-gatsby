/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const webpackStyleRules = require('./webpack-style-rules');

exports.onCreateWebpackConfig = ({ actions, loaders, stage, getConfig }) => {
  const isSSR = stage.includes(`html`);

  if (stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            !isSSR && loaders.miniCssExtract({ hmr: false }),
            ...webpackStyleRules,
          ].filter(Boolean),
        },
      ],
    },
  });
};
