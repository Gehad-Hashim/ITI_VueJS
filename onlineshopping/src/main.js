import { createApp } from 'vue'
import wrapperComponent from './wrapperComponent.vue'
import router from './routes/index'

const app=createApp(wrapperComponent);
app.use(router)
app.mount('#app')