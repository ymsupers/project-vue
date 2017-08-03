<template>
    <div>
        <h1>这个组件只有登录后才能正常访问.</h1>
        <span>当前登录名:{{username}} 昵称:{{nickname}}</span>
        <br />
        <a href="javascript:;" @click="logout">退出</a>
    </div>
</template>

<script>
    import * as types from '../../config/types';
    export default {
        data: function () {
            return {
                username: '',
                nickname: ''
            }
        },
        beforeMount: function () {
            var user = JSON.parse(this.$store.state.token);
            this.username = user.username;
            this.nickname = user.nickname;
        },
        methods: {
            logout: function () {
                this.$store.commit(types.LOGOUT);
                this.$router.push({ path: '/signIn' });
            }
        }
    }
</script>

<style>

</style>