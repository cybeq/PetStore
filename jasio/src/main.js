import { createApp } from 'vue'
import App from './App.vue'
import router from "../config/router";
// __________*****__________ //

const app  = createApp(App);
app.use(router)
// __________*****__________ //
app.mount('#app')
