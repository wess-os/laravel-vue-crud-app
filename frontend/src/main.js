import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router/router';

createApp(App).use(router).mount('#app');
