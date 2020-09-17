module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/recommended'],
    rules: {
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
