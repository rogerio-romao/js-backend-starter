module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
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
        // Possible Errors
        'array-callback-return': [
            'error',
            { allowImplicit: true, checkForEach: true }
        ],
        'constructor-super': 'error',
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'except-parens'],
        'no-constant-binary-expression': 'error',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-constructor-return': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': ['error', { includeExports: true }],
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-ex-assign': 'error',
        'no-fallthrough': ['error', { allowEmptyCase: true }],
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': ['error', { skipStrings: false }],
        'no-loss-of-precision': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'warn',
        'no-self-assign': ['error', { props: true }],
        'no-self-compare': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-undef': ['error', { typeof: true }],
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
        'no-unsafe-optional-chaining': [
            'error',
            { disallowArithmeticOperators: true }
        ],
        'no-unused-private-class-members': 'error',
        'no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                ignoreRestSiblings: true
            }
        ],
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': ['error', { requireStringLiterals: true }],
        // Best Practices
        'accessor-pairs': 'error',
        'arrow-body-style': [
            'error',
            'as-needed',
            { requireReturnForObjectLiteral: true }
        ],
        'block-scoped-var': 'error',
        camelcase: 'error',
        'capitalized-comments': [
            'warn',
            'always',
            { ignoreConsecutiveComments: true, ignoreInlineComments: true }
        ],
        'class-methods-use-this': 'warn',
        complexity: ['warn', { max: 9 }],
        curly: ['warn', 'multi', 'consistent'],
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': 'error',
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'func-names': ['warn', 'as-needed'],
        'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
        'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
        'guard-for-in': 'error',
        'logical-assignment-operators': [
            'warn',
            'always',
            { enforceForIfStatements: true }
        ],
        'max-depth': ['warn', { max: 4 }],
        'max-nested-callbacks': ['warn', { max: 4 }],
        'multiline-comment-style': ['warn', 'starred-block'],
        'new-cap': 'error',
        'no-alert': 'warn',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-console': 'warn',
        'no-delete-var': 'error',
        'no-div-regex': 'error'
    }
};
