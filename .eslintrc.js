module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'google'
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: false,
        },
        sourceType: 'module',
    },
    rules: {
        'require-jsdoc': [2, {
            'require': {
                'FunctionDeclaration': false,
                'MethodDefinition': false,
                'ClassDeclaration': false,
            },
        }],
        'arrow-parens': ['error', 'as-needed'],
        'max-len': [2, 140, 4],
        'react/prop-types': ['off'],
        'react/display-name': ['off'],
        'react/no-unescaped-entities': ['off'],
        indent: [0, 4, {SwitchCase: 1}],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        curly: 'error',
        'no-else-return': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        'no-prototype-builtins': ['off'],
        strict: 'error',
        'symbol-description': 'error',
        yoda: ['error', 'never', {exceptRange: true},
        ],
        'no-trailing-spaces': ['error', {'skipBlankLines': true}],
    },
};
