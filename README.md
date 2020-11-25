# @youngjuning/eslint-config

a powerful esLint config based on airbnb

## Prettier

Dependencies:

```sh
$ yarn add @youngjuning/prettier-config -D
```

Config:

```js
// .prettierrc.js
module.exports = require('@youngjuning/prettier-config');
```

## Base

> support .js、.ts

Dependencies:

```sh
$ yarn add -D eslint @youngjuning/eslint-config
```

Config:

```js
// .eslintrc.js
module.exports = {
  extends: ['@youngjuning/eslint-config']
}
```

## React

> support .js、.ts、.jsx、.tsx、.html

Dependencies:

```sh
$ yarn add -D eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  eslint-plugin-html
```

Config:

```js
// .eslintrc.js
module.exports = {
  extends: ['@youngjuning/eslint-config/react']
}
```

## React Native

> support .js、.ts、.jsx、.tsx

Dependencies:

```sh
$ yarn add -D eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  eslint-plugin-react-native
```

Config:

```js
// .eslintrc.js
module.exports = {
  extends: ['@youngjuning/eslint-config/react-native']
}
```

## Vue

> support .js、.ts、.vue、.html

Dependencies:

```sh
$ yarn add -D @vue/cli-service eslint-plugin-vue @vue/eslint-config-airbnb eslint-plugin-html
```

Config:

```js
// .eslintrc.js
module.exports = {
  extends: ['@youngjuning/eslint-config/vue']
}
```

## miniprogram

> support .js、.ts、.wxml

Dependencies:

```sh
$ yarn add eslint-plugin-html -D
```

Config:

```js
// .eslintrc.js
module.exports = {
  extends: ['@youngjuning/eslint-config/miniprogram']
}
```

## Jest

```sh
$ yarn add jest -D
```

## More Config

### .eslintignore

```
!.eslintrc.js
!.prettierrc.js
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

### husky & lint-staged

```sh
$ yarn add -D husky lint-staged
```

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ],
    // you can add wxml/html...
    "**/*.{less,md,json}": [
      "prettier --write",
      "git add"
    ]
  },
}
```

### vscode eslint 配置

禁用 formatOnSave，开启 source.fixAll.eslint

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // 建议直接删掉 Prettier 插件
  "prettier.disableLanguages": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
}
```

### git autocrlf

为了解决换行符冲突的问题，强烈建议设置 `core.autocrlf` 为 `input`。为什么这么做请读一下 [Git 多平台换行符问题(LF or CRLF)](https://blog.konghy.cn/2017/03/19/git-lf-or-crlf/)

```sh
$ git config --global core.autocrlf input
```

## Related repos

- [@youngjuning/prettier-config](https://github.com/youngjuning/prettier-config)
