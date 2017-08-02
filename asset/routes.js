/**
 * Created by Administrator on 2017/8/1 0001.
 */
module.exports = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: resolve => require(['./panel/home.vue'], resolve) },
    { path: '/signUp', component: resolve => require(['./panel/sign-up.vue'], resolve) },
    { path: '/signIn', component: resolve => require(['./panel/sign-in.vue'], resolve) },
];