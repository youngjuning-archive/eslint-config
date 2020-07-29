module.exports = {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-unused-vars': 1,
  'vue/require-valid-default-prop': 0,
  'vue/require-v-for-key': 1,
  'vue/max-attributes-per-line': 0, // 解决Attribute "bind" should be on a new line
  'vue/html-self-closing': 0,
  'vue/html-indent': 0,
  'vue/order-in-components': 0,
  'vue/attribute-hyphenation': 0,
  'vue/no-unused-components': 1,
  'vue/singleline-html-element-content-newline': 0,
  'vue/no-parsing-error': [
    2,
    {
      'x-invalid-end-tag': false,
    },
  ],
}
