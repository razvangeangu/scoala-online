import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import prettierOptions from './.prettierrc.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  ...compat.plugins('prettier'),
  ...compat.config({
    rules: {
      'prettier/prettier': ['error', prettierOptions],
      'no-param-reassign': ['error', { props: false }],
      'react/jsx-sort-props': [2],
      'require-await': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'react/jsx-no-literals': ['error', { noStrings: false }],
    },
  }),
];

export default eslintConfig;
