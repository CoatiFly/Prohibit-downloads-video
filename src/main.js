import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import Video from 'video.js'
import 'video.js/dist/video-js.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// user-defined
import tools from './tools';
import './styles/index.scss';
Vue.prototype.$tool = tools.newRouter;
Vue.prototype.$video = Video;

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
