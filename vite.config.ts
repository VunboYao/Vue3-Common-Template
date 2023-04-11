import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteLegacyPlugin from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    viteLegacyPlugin({
      targets: ['defaults', 'not IE 11', 'Android 4.4', 'iOS 10.0', 'Chrome > 31'],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        'vue-router',
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    host: true,
    /* proxy: {
      '/': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(''),
      },
    }, */
  },
})
