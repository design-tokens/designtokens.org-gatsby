const postcssPresetEnv = require('postcss-preset-env');
const emMediaQuery = require('postcss-em-media-query');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
    pxtorem({ mediaQuery: false, propList: ['*'], minPixelValue: 1 }),
    emMediaQuery(),
  ],
};
