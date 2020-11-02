import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './permission'

import './mock/index'

createApp(App).use(Antd).use(store).use(router).mount('#app')
