import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { useDarkMode } from './composables/useDarkMode'
import AppFor31 from './AppFor31.vue'
import AppFor32 from './AppFor32.vue'
import AppFor33 from './AppFor33.vue'
import AppFor34 from './AppFor34.vue'
import AppFor41 from './AppFor41.vue'
import AppFor42 from './AppFor42.vue'
import AppFor51 from './AppFor51.vue'

const { initDarkMode } = useDarkMode()
initDarkMode()

createApp(AppFor51).mount('#app')
