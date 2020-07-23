# @youngjuning/eslint-config

> 支持 jsx、js、ts、tsx、html

## Installation

```
yarn add -D @youngjuning/eslint-config
```

## Fast Usage

Config in package.json:

```json
{
  "eslintConfig": {
    "extends": ["@sishuguojixuefu"]
  },
  "eslintIgnore": ["!.eslintrc.js", "!.prettierrc.js", "index.js"],
  "prettier": "@sishuguojixuefu/eslint-config/.prettierrc.js"
}
```

## Single File Usage

Add to your eslint config (`.eslintrc.js`):

```js
module.exports = {
  root: true,
  extends: '@sishuguojixuefu',
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
  ...require('@youngjuning/eslint-config/.prettierrc.js'),
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

## 依赖

- eslint-config-airbnb
- eslint
- eslint-plugin-jsx-a11y
- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-react-hooks
- babel-eslint
- eslint-plugin-you-dont-need-lodash-underscore
- eslint-plugin-you-dont-need-momentjs
- eslint-config-airbnb-base
- prettier
- eslint-plugin-prettier
- eslint-config-prettier
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- eslint-import-resolver-typescript
- typescript
- eslint-plugin-html

```sh
$ yarn add eslint-config-airbnb-base eslint-config-airbnb eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks babel-eslint eslint-plugin-you-dont-need-lodash-underscore eslint-plugin-you-dont-need-momentjs prettier eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript typescript eslint-plugin-html
```
