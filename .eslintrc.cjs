/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    // "plugin:vue/essential",
    // "eslint:recommended",
    // "@vue/eslint-config-typescript/recommended",
    // "@vue/eslint-config-prettier",
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['import', 'node', 'promise'],
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    /* Modified Standard config */
    'no-var': 'warn',
    'object-shorthand': ['warn', 'properties'],
    'accessor-pairs': [
      'error',
      { setWithoutGet: true, enforceForClassMembers: true },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],
    // Added: disallow paren-less arrow functions (easier for TS to infer)
    'arrow-parens': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // Changed: only for new variable names as api uses snake_case
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],
    // Changed: add comma dangle on multiline for nicer diffs
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true },
    ],
    curly: ['error', 'multi-line'],
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', { allowKeywords: true }],
    'eol-last': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'func-call-spacing': ['error', 'never'],
    // Changed: allow async-await
    'generator-star-spacing': 'off',
    // Changed: Handled by typescript-eslint
    indent: 'off',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-useless-catch': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    // Changed: Added maxBOF
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    // Removed: typescript-eslint
    // 'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    // Removed: typescript-eslint
    // 'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    // Removed: typescript-eslint
    // 'no-new-symbol': 'error',
    // Changed: Handled by typescript-eslint
    'no-redeclare': 'off',
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    // Changed: Handled by typescript-eslint
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    // Changed: Handled by typescript-eslint
    'no-undef': 'off',
    'no-undef-init': 'error',
    // Added: Avoid confusion with private/unused vars
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__vue__', // cypress vue
          '_compile', // esbuild using node's Module._compile
        ],
        allowAfterThis: true,
        enforceInClassFields: false,
      },
    ],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // Removed: typescript-eslint
    // 'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    // Changed: Handled by typescript-eslint
    'no-unused-vars': 'off',
    // Changed: Handled by typescript-eslint
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'one-var': ['error', { initialized: 'never' }],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before', '|>': 'before' } },
    ],
    'padded-blocks': [
      'error',
      { blocks: 'never', switches: 'never', classes: 'never' },
    ],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    // Added: Allows TS to infer string literal types
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: { markers: ['*package', '!', '/', ',', '='] },
        block: {
          balanced: true,
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          exceptions: ['*'],
        },
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    // Removed: typescript-eslint
    // 'valid-typeof': ['error', { requireStringLiterals: true, }],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    // Added: import ordering
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['unknown'],
          ['internal', 'parent', 'sibling', 'index', 'object'],
          'type',
        ],
        pathGroups: [
          // group components, composables & stores
          { pattern: 'components/**', group: 'unknown' },
          { pattern: 'Form/**', group: 'unknown' },
          { pattern: 'Common/**', group: 'unknown' },
          {
            pattern: '*.vue',
            patternOptions: { matchBase: true },
            group: 'unknown',
          },
          { pattern: '**/composables/**', group: 'unknown' },
          { pattern: '{.,..}/**/composables/**', group: 'unknown' },
          { pattern: '**/stores/**', group: 'unknown' },
          { pattern: '{.,..}/**/stores/**', group: 'unknown' },
          // mark other custom paths as not external
          { pattern: '@/**', group: 'internal' },
          { pattern: 'assets/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'type'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        warnOnUnassignedImports: false,
      },
    ],
    // Removed: Handled by typescript
    'import/no-unresolved': 'off',
    // Removed: Handled by typescript
    'import/namespace': 'off',
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-callback-literal': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/process-exit-as-throw': 'error',
    'promise/param-names': 'error',
    /* End Modified Standard config */

    /* Custom Vue Config */
    // extension rules to match above config
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': 'off',
    'vue/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: true }],
    'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],
    'vue/func-call-spacing': ['error', 'never'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/no-constant-condition': ['error', { checkLoops: false }],
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': ['error', 'functions'],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-sparse-arrays': 'error',
    'vue/object-curly-newline': [
      'error',
      { multiline: true, consistent: true },
    ],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    'vue/operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before', '|>': 'before' } },
    ],
    'vue/prefer-template': 'error',
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    'vue/template-curly-spacing': ['error', 'never'],
    // restrict to 3 attributes per line
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1,
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    // component order
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          'mixins',
          'directives',
          'filters',
          'components',
          'inheritAttrs',
          'emits',
          'model',
          ['props', 'propsData'],
          'setup',
          'LIFECYCLE_HOOKS',
          'data',
          'computed',
          'watch',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    // enforce specific casing for components
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: true },
    ],
    // forbid parentheses in empty v-on calls
    'vue/v-on-function-call': 'error',
    // other uncategorized rules
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': ['error', ['composition-vue2', 'options']],
    'vue/html-comment-indent': ['error', 2],
    'vue/no-child-content': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/v-for-delimiter-style': ['error', 'of'],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
    // TODO: From recommended & uncategorized, enable and fix the resulting errors
    'vue/multi-word-component-names': 'off',
    'vue/require-name-property': 'off',
    'vue/no-unused-refs': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    /* End Custom Vue Config */

    /* Custom TS Config */
    // hacky fix for indent, see https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
        offsetTernaryExpressions: true,
      },
    ],
    // enforce no explicit any types (use TSFixMe instead)
    '@typescript-eslint/no-explicit-any': 'error',
    // enforce TS overloads be adjacent
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // enforce PascalCase class/interface names
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    // enforce member delimiter styles
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
        },
      },
    ],
    // enforce return types on standalone functions
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    // uncategorized rules & extension rules
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    // TODO: From recommended, should probably be enabled
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    /* End Custom TS Config */
  },
  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      rules: {
        'node/no-callback-literal': 'off',
        'vue/require-prop-types': 'off',
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'test',
            withinDescribe: 'test',
          },
        ],
        'jest/no-duplicate-hooks': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': [
          'error',
          {
            ignore: ['describe'],
          },
        ],
        'jest/prefer-spy-on': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-top-level-describe': 'error',
      },
    },
  ],
}
