import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { useDarkMode } from './composables/useDarkMode'

const { initDarkMode } = useDarkMode()
initDarkMode()

createApp(App).mount('#app')
