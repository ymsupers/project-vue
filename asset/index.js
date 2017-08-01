/**
 * Created by Administrator on 2017/8/1 0001.
 */
// START: 导入项目依赖核心包
import Vue from 'vue';
import VueRouter from 'vue-router';
// START: ok
import routes from './routes';
import App from './panel/app.vue';

Vue.use(VueRouter);
// 实例 VueRouter 并 传入 `routes`
const router = new VueRouter({ routes });

// 实例化 Vue 对象 并将路由挂载到 Vue 实例当中
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

