module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier', // eslint-config-prettier
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended', // Not all eslint core rules are compatible with TypeScript, so you need to add both eslint:recommended and plugin:@typescript-eslint/eslint-recommended
    'plugin:@typescript-eslint/recommended', // All the recommended rules for the plugin typescript-eslint
    'plugin:react/recommended',
    'prettier', // Make sure to put it last in the extends array, so it gets the chance to override other configs.
    'prettier/@typescript-eslint', // Use eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // eslint-plugin-prettier exposes a "recommended" configuration that configures both eslint-plugin-prettier and eslint-config-prettier in a single step. Make sure this is always the last configuration in the extends array.
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx','.d.ts'],
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx'],
    }],
    'spaced-comment': ['error', 'always', {
      'markers': ['/'],
    }],
  },
};
