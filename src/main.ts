import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/main.css';

import App from './App.vue';
import router from './router';
import { setupGlobDirectives } from './directives';

async function bootstrap() {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);

  setupGlobDirectives(app);
  app.mount('#app');
}

bootstrap();
