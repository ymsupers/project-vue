/**
 * Created by Administrator on 2017/8/3 0003.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as types from '../config/types';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            // 将 token 保存在浏览器缓存中
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            // 从浏览器缓存中移除令牌
            localStorage.removeItem('token');
            state.token = null;
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        }
    }
});

export default store;