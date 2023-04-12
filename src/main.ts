import { createApp } from 'vue'
import App from './App.vue'
import { Pinia } from '@/store'
import router from '@/router'
import './index.css'

// rem设置
import '@/utils/rem'

createApp(App).use(Pinia).use(router).mount('#app')
