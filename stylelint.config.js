module.exports = {
  extends: ['stylelint-config-ygxy'],
  rules: {
    // 修复在Vue3中的警告
    'declaration-block-no-duplicate-properties': [true, {
      'ignore': ['consecutive-duplicates']
    }],
    // style标签：可以为空
    'no-empty-source': null
  }
}

