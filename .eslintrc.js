module.exports = {
  env: {
    'browser': true,
    'es6': true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {devDependencies: ['jest.setup.js', '**/*.test.js', '**/*.test.jsx']}],
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': 'warn',
    'prefer-object-spread': 'off'
  }
}
