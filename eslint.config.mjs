// eslint.config.mjs

import eslintPluginReact from 'eslint-plugin-react';
import pkg from 'eslint';
const { Linter } = pkg;

export default [
  {
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'no-console': 'warn',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/react-in-jsx-scope': 'error',
    },
  },
];
