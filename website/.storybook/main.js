require('imports-loader');
const path = require('path');

module.exports = {
  presets: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        exclude: /^@babel/,
      },
    },
  ],
  stories: ['../src/**/*.stories.(jsx|mdx)'],
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    'storybook-addon-themes',
  ],
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // Since we're using Yarn Workspaces and nesting the packages, we need to include the parent package
    config.module.rules[0].include = require('path').resolve('../..');

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    // Run `source-loader` on story files to show their source code
    // automatically in `DocsPage` or the `Source` doc block.
    config.module.rules.push({
      test: /\.stories\.jsx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });

    // Add specific loader rule for CSS (Sass) Modules
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              // Same as https://github.com/gatsbyjs/gatsby/blob/94d1c4962a5620ff80f2eb68b4b072f8a3ffe898/packages/gatsby/src/utils/webpack-utils.ts#L208
              localIdentName: '[name]--[local]--[hash:base64:5]',
              context: path.resolve(__dirname, '../src'),
            },
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'resolve-url-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../src')],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });
    return config;
  },
};
