module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'monorepo'],
  rules: {
    'monorepo/no-relative-import': 'error',
    'prettier/prettier': 'error',

    // Turn of preference of default export
    'import/prefer-default-export': 'off',

    // JSX allowed in .js files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    // Allow props spreading on components
    'react/jsx-props-no-spreading': 'off',

    // Disable the formatting of JSX elements (it doesn't always know whats best!)
    'react/jsx-one-expression-per-line': 'off',

    // Turn off an annoying rule when using Gatsby's Link component
    'jsx-a11y/anchor-is-valid': 'off',

    // Turn off wrapping every emoji in <span> tags
    'jsx-a11y/accessible-emoji': 'off',
  },
  ignorePatterns: ['website/.cache/', 'website/public/', 'node_modules/'],
  overrides: [
    {
      files: ['**/*.stories.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
