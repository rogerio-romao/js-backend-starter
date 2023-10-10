module.exports = {
    env: {
        browser: true,
        es2024: true,
        node: true,
    },
    plugins: ['unicorn'],
    overrides: [
        {
            env: {
                node: true,
                browser: true,
                es2024: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        // Possible Errors
        'array-callback-return': [
            'error',
            { allowImplicit: true, checkForEach: true },
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
            { disallowArithmeticOperators: true },
        ],
        'no-unused-private-class-members': 'error',
        'no-unused-vars': [
            'warn',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
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
            { requireReturnForObjectLiteral: true },
        ],
        'block-scoped-var': 'error',
        camelcase: 'error',
        'class-methods-use-this': 'warn',
        complexity: ['warn', { max: 20 }],
        curly: ['warn', 'all'],
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
            { enforceForIfStatements: true },
        ],
        'max-depth': ['warn', { max: 4 }],
        'max-nested-callbacks': ['warn', { max: 4 }],
        'new-cap': 'error',
        'no-alert': 'warn',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-console': 'warn',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty': ['error', { allowEmptyCatch: false }],
        'no-empty-function': ['error', { allow: ['methods', 'constructors'] }],
        'no-empty-static-block': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
        'no-extra-label': 'error',
        'no-extra-semi': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': [
            'warn',
            { boolean: false, number: true, string: true },
        ],
        'no-implicit-globals': ['error', { lexicalBindings: true }],
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-mixed-operators': [
            'error',
            {
                allowSamePrecedence: true,
            },
        ],
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-object-constructor': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'warn',
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-return-assign': ['error', 'always'],
        'no-script-url': 'error',
        'no-sequences': ['error', { allowInParentheses: false }],
        'no-shadow': ['error', { hoist: 'all' }],
        'no-shadow-restricted-names': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': [
            'error',
            { enforceInClassFields: true, enforceInMethodNames: true },
        ],
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-unused-expressions': ['error', { enforceForJSX: true }],
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'warn',
        'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'warn',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': [
            'warn',
            { terms: ['todo', 'fixme'], location: 'start' },
        ],
        'no-with': 'error',
        'object-shorthand': ['error', 'methods', { avoidQuotes: true }],
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': ['error', { allowUnboundThis: false }],
        'prefer-const': [
            'error',
            { destructuring: 'all', ignoreReadBeforeAssign: true },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-has-own': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'warn',
        'require-yield': 'error',
        'spaced-comment': 'warn',
        'symbol-description': 'error',
        yoda: 'error',
        // Unicorn rules
        'unicorn/better-regex': 'warn',
        'unicorn/catch-error-name': [
            'warn',
            { name: 'error', ignore: [/err/u] },
        ],
        'unicorn/consistent-destructuring': 'warn',
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/empty-brace-spaces': 'warn',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'warn',
        'unicorn/explicit-length-check': 'warn',
        'unicorn/filename-case': [
            'warn',
            { cases: { kebabCase: true, pascalCase: true } },
        ],
        'unicorn/new-for-builtins': 'warn',
        'unicorn/no-abusive-eslint-disable': 'warn',
        'unicorn/no-array-callback-reference': 'warn',
        'unicorn/no-array-for-each': 'warn',
        'unicorn/no-array-method-this-argument': 'warn',
        'unicorn/no-await-expression-member': 'warn',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-document-cookie': 'error',
        'unicorn/no-empty-file': 'warn',
        'unicorn/no-for-loop': 'warn',
        'unicorn/no-hex-escape': 'warn',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-invalid-remove-event-listener': 'error',
        'unicorn/no-lonely-if': 'warn',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-null': 'warn',
        'unicorn/no-object-as-default-parameter': 'warn',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-thenable': 'error',
        'unicorn/no-this-assignment': 'warn',
        'unicorn/no-typeof-undefined': 'error',
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/no-unreadable-iife': 'error',
        'unicorn/no-unused-properties': 'warn',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'warn',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/no-useless-switch-case': 'warn',
        'unicorn/no-useless-undefined': 'warn',
        'unicorn/no-zero-fractions': 'warn',
        'unicorn/number-literal-case': 'error',
        'unicorn/numeric-separators-style': [
            'warn',
            { onlyIfContainsSeparator: true },
        ],
    },
};
