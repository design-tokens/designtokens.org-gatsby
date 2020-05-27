# designtokens.org

Work in progress - public contributions aren't accepted for the moment.

## Quick start

1. Clone this repository
1. In a terminal, `cd` into this directory
1. [Install `nvm`](https://github.com/nvm-sh/nvm#install--update-script), and run this command to ensure your local environment is running the correct version of Node.js:

   ```
   nvm install
   ```

To run the website locally:

1. Run `yarn install` (if the install fails, run `rm -rf node_modules` and try again)
1. Run `yarn develop`

## Storybook

Run `yarn storybook` to preview stories in a browser.

## Building the tokens

Design tokens are located in the `packages/design-tokens` directory.

1. Make changes to files in `packages/design-tokens/tokens`
1. Run `yarn workspace @dtcg/design-tokens build`

## Deploying the site

Changes to `master` are automatically deployed to https://www.designtokens.org.

## Note on MDX

Pages can be created and edited using JavaScript, JSX, and MDX.

Configuration: https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#configuration

## Editing the code

Using VS Code is recommended.

To benefit from the best linting and on-save formatting experience, install the recommended extensions for the workspace, which are available as show below:

![Recommended extensions](https://code.visualstudio.com/assets/docs/editor/extension-gallery/recommendations.png)
