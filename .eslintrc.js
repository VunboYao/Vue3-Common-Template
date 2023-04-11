module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json',
    '@vunbo',
  ],
  rules: {
    'vue/component-tags-order': ['error', {
      order: [['script', 'template'], 'style'],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 1,
      },
    }],

  },
}
