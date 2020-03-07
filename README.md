# designtokens.org

Work in progress - public contributions aren't accepted for the moment.

## Quick start

To run the website locally:

1. Clone this repository
2. Run `yarn install`
3. Run `yarn develop`

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
