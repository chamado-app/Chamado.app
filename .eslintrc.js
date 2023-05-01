require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'import'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue']
  },
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always'
      }
    ],
    'sort-imports': [
      'error',
      { allowSeparatedGroups: true, ignoreDeclarationSort: true }
    ]
  }
}
