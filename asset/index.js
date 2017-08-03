/**
 * Created by Administrator on 2017/8/1 0001.
 */
// START: 导入项目依赖核心包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
// START: ok
import axios from './http';
import store from './store';
import router from './routes';
import App from './panel/app.vue';
// 将 axios 挂载到 Vue原型实例中,方便组件访问
Vue.prototype.axios = axios;
// 实例化 Vue 对象 并将路由挂载到 Vue 实例当中
const app = new Vue({
    router,
    axios,
    store,
    render: h => h(App)
}).$mount('#app');

