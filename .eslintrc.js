module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    settings:  {
        react:  {
            version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    rules: {
        "curly": "warn",
        "class-methods-use-this": "error",
        "block-scoped-var": "error",
        "eqeqeq": "error",
        "vars-on-top": "warn",
        "no-unused-vars": "warn",
        "no-use-before-define": "error",
        "array-bracket-spacing": "warn",
        "comma-spacing": "warn",
        "spaced-comment": "warn",
        "arrow-spacing": "warn",
        "constructor-super": "warn",
        "no-this-before-super": "error",
        "no-var": "warn",
        "prefer-const": "warn",
        "react/jsx-filename-extension": "off",
    },
};
