import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';
import SlotData from './components/SlotData.vue';

const app = createApp(App);

// 전역 Component
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('slot-data', SlotData);

app.mount('#app');
