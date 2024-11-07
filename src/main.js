import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Импортируем Pinia
import router from './router.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const app = createApp(App);
const pinia = createPinia();

// Подключаем Pinia
app.use(pinia);

// Подключаем Vue Router
app.use(router);

// Монтируем приложение
app.mount('#app');
