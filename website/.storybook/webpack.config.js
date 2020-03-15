require('imports-loader');
const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = ({ config }) => {
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
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  config.module.rules.push({
    test: /\.stories\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

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
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: {
            localIdentName: '[path]-[local]-[hash:base64:5]',
          },
        },
      },
      { loader: 'sass-loader' },
    ],
    include: path.resolve(__dirname, '../src'),
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    exclude: /\.module\.scss$/,
    include: path.resolve(__dirname, '../src'),
  });

  return config;
};
