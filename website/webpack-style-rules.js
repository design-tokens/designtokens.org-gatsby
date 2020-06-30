const path = require('path');

module.exports = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: {
        localIdentName: '[name]--[local]--[hash:base64:5]',
        context: path.resolve(__dirname, './src'),
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
      sassOptions: {
        includePaths: [path.resolve(__dirname, './src')],
      },
    },
  },
];
