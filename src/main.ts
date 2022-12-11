import { createApp } from 'vue'
import { Pinia } from '@/store'
import router from '@/router'
import App from './App.vue'
import './index.css'

// rem设置
import '@/utils/rem'

createApp(App).use(Pinia).use(router).mount('#app')
