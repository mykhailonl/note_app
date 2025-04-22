import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'build', '*.log', 'coverage'] },
    {
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        { files: ['**/*.{js,jsx,ts,tsx}'], rules: { ...reactPlugin.configs.recommended.rules } },
        prettierConfig
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
        'react': reactPlugin,
        '@typescript-eslint': tseslint.plugin,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'warn',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
)