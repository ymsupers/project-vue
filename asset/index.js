/**
 * Created by Administrator on 2017/8/1 0001.
 */
// START: 导入项目依赖核心包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
// START: ok
import routes from './routes';
import App from './panel/app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: '登录认证令牌'
    }
});


// 实例 VueRouter 并 传入 `routes`
const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
        // 通过vuex state获取当前的token是否存在
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            });
        }
    } else {
        next();
    }
});


// 实例化 Vue 对象 并将路由挂载到 Vue 实例当中
const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');

