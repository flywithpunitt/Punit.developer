module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json', // Ensure this path matches your `tsconfig.json` location
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals',
    ],
    rules: {
      '@typescript-eslint/dot-notation': 'off', // Optionally disable this rule
    },
  };
  