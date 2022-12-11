const pxToRem = require('postcss-pxtorem')

module.exports = {
  plugins: [
    // 配置信息：https://www.npmjs.com/package/postcss-pxtorem
    pxToRem({
      rootValue: 100, // 根节点字体大小
      propList: ['*'], // 匹配所有
      unitPrecision: 3, // rem转换后的精确小数点后的位数
      mediaQuery: false, // 不转换媒体查询
      selectorBlackList: [], // 忽略的选择器
      minPixelValue: 2, // 会被转换的最小px值
      exclude: /node_modules/i, // 排除文件
    }),
  ],
}
