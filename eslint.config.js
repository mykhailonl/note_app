import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'build', '*.log', 'coverage'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      { files: ['**/*.{js,jsx,ts,tsx}'], rules: { ...reactPlugin.configs.recommended.rules } },
      prettierConfig,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: reactPlugin,
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // Import sorting rules
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'always',
          pathGroups: [
            // React and main libs
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '{react-*,redux*}', group: 'external' },

            // Components
            { pattern: '@/components/common/**', group: 'internal', position: 'before' },
            { pattern: '@/components/features/**', group: 'internal' },

            // Pages
            { pattern: '@/pages/**', group: 'internal' },

            // Redux and other services
            { pattern: '{@/redux/**,@/services/**}', group: 'internal' },

            // Hooks
            { pattern: '@/hooks/**', group: 'internal' },

            // Utils
            { pattern: '@/utils/**', group: 'internal', position: 'after' },

            // Styles
            { pattern: '{@/styles/**,*.scss,*.css}', group: 'internal', position: 'after' },

            // Types
            { pattern: '@/types/**', group: 'type' },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },
);
