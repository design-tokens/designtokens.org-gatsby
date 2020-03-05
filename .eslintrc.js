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
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: ['website/.cache/', 'website/public/', 'node_modules/'],
};
