module.exports = {
  files: ['*.{spec,test}.{js,ts,tsx}', '**/__{mocks,tests}__/**/*.{js,ts,tsx}'],
  extends: ['plugin:jest/recommended'],
  env: {
    jest: true,
    'jest/globals': true,
  },
  rules: {
    // Jest Plugin
    // The following rules are made available via `eslint-plugin-jest`.
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 1,
    'jest/no-identical-title': 1,
    'jest/valid-expect': 1,
  },
};
