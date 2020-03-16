module.exports = {
  siteMetadata: {
    title: 'Design Tokens W3C Community Group',
    description:
      'The DTCG’s goal is to provide standards upon which products and design tools can rely for sharing stylistic pieces of a design system at scale.',
    author: '@designtokens',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true,
          },
        },
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
          default: require.resolve(
            './src/components/layouts/DefaultLayout.jsx',
          ),
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
