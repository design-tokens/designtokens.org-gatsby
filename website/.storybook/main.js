require('imports-loader');
const path = require('path');
const sassResourcesLoaderRule = require('../plugins/gatsby-sass-resources-loader/rule')
  .rule;

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

    // set the NODE_ENV to 'production' by default, to allow babel-plugin-remove-graphql-queries to remove static queries
    process.env.NODE_ENV = 'production';

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),

      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),

      // Generate prop tables from prop types
      require.resolve('babel-plugin-react-docgen'),
    ];

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
      test: /\.module\.scss$/,
      use: [
        { loader: 'style-loader', options: { sourceMap: true } },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: {
              localIdentName: '[path]-[local]-[hash:base64:5]',
            },
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
        sassResourcesLoaderRule,
      ],
      include: path.resolve(__dirname, '../src'),
    });

    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        { loader: 'style-loader', options: { sourceMap: true } },
        { loader: 'css-loader', options: { sourceMap: true } },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
        { loader: 'sass-loader', options: { sourceMap: true } },
        sassResourcesLoaderRule,
      ],
      exclude: /\.module\.scss$/,
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};
