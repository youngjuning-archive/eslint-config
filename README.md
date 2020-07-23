# @youngjuning/eslint-config

a powerful esLint config

> support jsx、js、ts、tsx、html、jest

## Installation

```
yarn add -D @youngjuning/eslint-config
```

## Config

### .eslintrc.js

Add to your eslint config (`.eslintrc.js`):

```js
module.exports = {
  root: true,
  extends: '@youngjuning',
}
```

### react native

1、删除原始插件

```sh
$ yarn remove @react-native-community/eslint-config
```

2、配置 `.eslintrc.js`

```js
module.exports = {
  root: true,
  extends: '@youngjuning',
  env: {
    'react-native/react-native': true,
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
