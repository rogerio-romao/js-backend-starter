module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'for-direction': 'error',
        'no-async-promise-executor': 'error',
        'no-class-assign': 'error'
    }
};
