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
  ],
};
