module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: [],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
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
};
