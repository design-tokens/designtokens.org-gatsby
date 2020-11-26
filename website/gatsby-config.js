const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Design Tokens W3C Community Group',
    htmlTitle:
      'Design Tokens <abbr title="World Wide Web Consortium">W3C</abbr> Community Group',
    description:
      'The DTCG’s goal is to provide standards upon which products and design tools can rely for sharing stylistic pieces of a design system at scale.',
    author: 'DTCG',
    siteUrl: `https://www.designtokens.org/`,
    social: {
      twitter: 'designtokens',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sourceMap: true,
        includePaths: [path.resolve(__dirname, './src')],
        sassRuleTest: /\.nothing\.s(a|c)ss$/,
        sassRuleModulesTest: /\.scss$/,
        useResolveUrlLoader: true,
        // eslint-disable-next-line global-require
        postCssPlugins: require('./postcss.config.js').plugins,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/DefaultLayout.jsx'),
        },
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          // Valid remark-smartypants options may passed to the plugin.
          // For more on valid options refer to the remark-smartypants API
          // https://github.com/retextjs/retext-smartypants#api
          {
            resolve: 'gatsby-remark-smartypants',
          },
          // Avoid widows in titles, paragraphs, etc.
          {
            resolve: 'gatsby-remark-widows',
            // Default options:
            // options: {
            //   minLength: 4,
            //   maxLength: null,
            // },
          },
        ],
      },
    },
  ],
};
