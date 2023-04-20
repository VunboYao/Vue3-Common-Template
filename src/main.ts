import { createApp } from 'vue'
import App from './App.vue'
import { Pinia } from '@/store'
import router from '@/router'
import './index.css'

// rem设置
// import '@/utils/rem'

// UI组件注册
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App)
  .use(Pinia)
  .use(router)
  .use(Antd)
  .mount('#app')
