# @youngjuning/eslint-config-airbnb

a powerful esLint config based on airbnb

> support vue、jsx、js、ts、tsx、html、jest

## Installation

> First of all, Please remove existed config in your project to avoid dependency conflict.
> remove eslint、prettier dependency in your project

```sh
$ yarn add -D @youngjuning/eslint-config-airbnb
```

## Config

Add to your eslint config (`.eslintrc.js`):

```js
module.exports = {
  root: true,
  extends: '@youngjuning/airbnb',
}
```

### react native

```js
module.exports = {
  root: true,
  extends: '@youngjuning/airbnb',
  env: {
    'react-native/react-native': true,
  },
}
```

### vue with typescript

```js
module.exports = {
  root: true,
  extends: '@youngjuning/airbnb',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
```

## More

### .eslintignore

```
!.eslintrc.js
!.prettierrc.js
```

### .prettierrc.js

```js
module.exports = {
  ...require('@youngjuning/eslint-config-airbnb/.prettierrc.js'),
}
```

### .prettierignore

```
**/node_modules/*
```

### .editorconfig

```
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.gradle]
indent_size = 4

[BUCK]
indent_size = 4
```

## yorkie & lint-staged

```sh
$ yarn add -D yorkie lint-staged
```

```json
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ],
    // you can add wxml/html...
    "*.{less,md,json}": [
      "prettier --write",
      "git add"
    ]
  },
}
```
