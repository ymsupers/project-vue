<template>
    <div id="login">
        <form action="#" method="post" accept-charset="UTF-8">
            <label for="username">
                <span>用户名:</span>
                <input type="text" name="username" v-model="username" id="username" placeholder="用户名">
            </label>
            <label for="password">
                <span>密　码:</span>
                <input type="password" name="password" v-model="password" id="password" placeholder="密码">
            </label>
            <div>
                <button type="button" @click="formSubmit">登录</button>
            </div>
        </form>
    </div>
</template>

<script>
    import * as types from '../../config/types';
    export default {
        data: function () {
            var data = Object.create(null);
            data.username = '';
            data.password = '';
            return data;
        },
        methods: {
            formSubmit: function () {
                this.axios.post('user/login', this.$data, {
                    'headers': {
                        // 'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(response => {
                    console.log('响应结果:', response);
                    var res = response.data;
                    if (res.code == 200 && res.data) {
                        alert('登录成功');
                        this.$store.commit(types.LOGIN, JSON.stringify(res.data));
                        this.$router.push({ path: '/user' });
                    } else {
                        alert(res.errMsg);
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        },
        computed: {
            token() {
                return this.$store.state.token;
            }
        }
    }
</script>

<style lang="scss">
    label {
        display: block;
        margin-bottom: 15px;
    }
</style>