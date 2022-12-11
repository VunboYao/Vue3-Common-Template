import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteLegacyPlugin from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    vue(),
    viteLegacyPlugin({
      targets: ['defaults', 'not IE 11', 'Android 4.4', 'iOS 10.0', 'Chrome > 31'],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    host: true,
    /*proxy: {
      '/': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(''),
      },
    },*/
  },
})
