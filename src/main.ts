import Vue from 'vue';
import App from './App.vue';

import '@/style/reset.css';
import '@/style/base.css';

// 关闭生产模式下给出的提示
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
