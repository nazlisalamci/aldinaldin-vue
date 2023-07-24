/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import axios from 'axios'
// Composables
import { createApp } from 'vue'
import store from './store/index' 

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(store)
registerPlugins(app)
app.config.globalProperties.axios = axios
app.mount('#app')
