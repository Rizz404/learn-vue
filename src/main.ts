import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { useDarkMode } from './composables/useDarkMode'
import AppFor31 from './AppFor31.vue'
import AppFor32 from './AppFor32.vue'

const { initDarkMode } = useDarkMode()
initDarkMode()

createApp(AppFor32).mount('#app')
