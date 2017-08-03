/**
 * Created by Administrator on 2017/8/3 0003.
 */
import axios from 'axios';
import store from './store';
import * as types from '../config/types';
import router from './routes';

// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
            }
        }
        return Promise.reject(err.response.data);
    }
);

export default axios;