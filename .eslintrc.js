module.exports = {
    // eslint-disable-next-line indent
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'linebreak-style': 0,
        'react/jsx-filename-extension': 0,
        'indent': 0,
        'quote-props': [1, 'consistent-as-needed'],
        'no-multiple-empty-lines': [1, { max: 3 }],
        'no-use-before-define': 2,
        'vars-on-top': 1,
        'no-var': 1,
        'prefer-const': 1,
        'comma-spacing': 1,
        'spaced-comment': 1,
        'arrow-spacing': 1,
        'constructor-super': 1,
        'no-this-before-super': 1,
        'no-dupe-class-members': 2,
        'block-scoped-var': 2,
        'class-methods-use-this': 2,
    },
};
