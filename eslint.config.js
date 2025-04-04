import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-trailing-spaces': 'error',
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'space-infix-ops': 'error',
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'no-multi-spaces': 'error'
    }
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
        ecmaVersion: 2022
      }
    },
    rules: {
      ...pluginVue.configs.essential.rules,
      'vue/html-indent': ['error', 2],
      'vue/script-indent': ['error', 2],
      'vue/no-multi-spaces': 'error',
      'vue/max-attributes-per-line': ['error', {
        'singleline': 3,
        'multiline': 1
      }],
      'vue/mustache-interpolation-spacing': ['error', 'always']
    }
  }
];