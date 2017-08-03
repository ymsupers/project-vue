/**
 * Created by Administrator on 2017/8/1 0001.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import * as types from '../config/types';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: resolve => require(['./panel/home.vue'], resolve) },
    { path: '/signUp', component: resolve => require(['./panel/sign-up.vue'], resolve) },
    { path: '/signIn', component: resolve => require(['./panel/sign-in.vue'], resolve) },
    {
        path: '/user',
        component: resolve => require(['./panel/user.vue'], resolve),
        meta: {
            requireAuth: true
        }
    }
];

// 页面刷新重新赋值token
if(window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'));
}

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/signIn',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});

export default router;
