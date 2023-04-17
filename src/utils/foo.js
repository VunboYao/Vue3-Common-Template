const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  productionSourceMap: false, // 生产环境不要SourceMap
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${resolve('./src/assets/less/theme.less')}";`
        },
        javascriptEnabled: true
      }
    }
  },

  configureWebpack: (config) => {
    if (isProduction) {
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }

      // 使用gzip压缩
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(`\\.(${ productionGzipExtensions.join('|') })$`),
        threshold: 10240,
        minRatio: 0.8
      }))
    }
  },

  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'https://test.com', // 服务地址
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
