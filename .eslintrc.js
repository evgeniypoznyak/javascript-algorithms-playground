module.exports = {
  root: true,
  extends: ['prettier'],
  plugins: [],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [],
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  // "ignorePatterns": ["d=\"([\\s\\S]*?)\"", 'd="([\\s\\S]*?)"'],
  rules: {
    'prefer-const': 'error',
    'no-console': 'warn',
    'no-shadow': 'error',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'no-var': 'error',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
}
