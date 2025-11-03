export default [
  {
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        NodeJS: true,
        mocha: true
      }
    },
    plugins: {},
    rules: {},
  },
];
