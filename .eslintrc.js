module.exports = {
    env: {
      browser: true,
      node: false,
    },
    extends: ['react-app'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: '.',
    },
    rules: {
      'no-console': [
        'error',
        {
          allow: ['error'],
        },
      ],
      'jam3/no-sanitizer-with-danger': [
        2,
        {
          wrapperName: ['sanitize', 'dompurify.sanitize', 'dompurify'],
        },
      ],
    },
    overrides: [
      {
        files: ['**/*.ts?(x)'],
      },
    ],
    plugins: ['@typescript-eslint', 'prettier', 'jam3'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  