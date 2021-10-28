import { createApp } from 'vue';
import App from './App.vue';
import Vuex from "./store";
import VueRouter from "./router";
import { get, post } from "./request"

const app = createApp(App);

app.config.globalProperties.axios = { get, post };
app.use(Vuex);
app.use(VueRouter);
app.mount('#app')
