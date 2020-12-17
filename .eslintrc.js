module.exports = {
   root: true,
   env: {
      node: true,
      es6: true
   },
   extends: [
      'plugin:vue/recommended',
      'eslint:recommended',
      'prettier/vue',
      'plugin:prettier/recommended'
   ],
   rules: {
      'comma-dangle': ['error', 'never'],
      'no-debugger': 'off',
      'prettier/prettier': 'warn',
      'no-console': 'off',
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      'vue/require-default-prop': 'off',
      'space-before-function-paren': 'off' // doesn't work properly with 'async () => { }'
   },
   parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 6
   },
   plugins: ['prettier']
};
