import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import * as tokens from '@dtcg/design-tokens';

import '../src/global.scss';
import '../src/storybook.scss';

addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  themes: [
    {
      name: 'Follow user preference',
      class: '',
      color: tokens.colorBackgroundWeak,
      default: true,
    },
    {
      name: 'Light mode',
      class: 'light-mode',
      color: tokens.colorBackgroundStrong,
    },
    {
      name: 'Dark mode',
      class: 'dark-mode',
      color: tokens.colorBackgroundStrongInverse,
    },
  ],
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  },
});

addDecorator(withA11y);

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
global.__BASE_PATH__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};
