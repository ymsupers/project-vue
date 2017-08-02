<template>
    <div id="account">
        <form action="#" method="post" accept-charset="UTF-8">
            <label for="username">
                <span>用户名:</span>
                <input type="text" name="username" id="username" v-model="username" placeholder="用户名">
            </label>
            <label for="password">
                <span>密　码:</span>
                <input type="password" name="password" id="password" v-model="password" placeholder="密码">
            </label>
            <label for="nickname">
                <span>昵　称:</span>
                <input type="text" name="nickname" id="nickname" v-model="nickname" placeholder="昵称">
            </label>
            <div>
                <button type="button" @click="formSubmit">添加一个账户</button>
                <button type="reset">重置表单</button>
            </div>
        </form>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        data: function () {
            let $data = Object.create(null);
            $data.username = '';
            $data.password = '';
            $data.nickname = '';
            return $data;
        },
        methods: {
            formSubmit: function () {
                if (this.username.length < 6) {
                    return alert('用户名长度不够!');
                }
                if (this.password.length < 6) {
                    return alert('密码长度不够!');
                } else if (this.password.length > 12) {
                    return alert('密码长度过长!');
                }
                if (this.nickname.length <= 0) {
                    return alert('昵称长度不够!');
                }
                // 提交表单
                $.post('user/add', this.$data).then(result => {
                    if (result.code == 200) {
                        alert('成功创建一个账户');
                        this.$router.push({ path: '/signIn' });
                    } else {
                        alert('创建失败!');
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    $mb15: 15px;
    label {
        display: block;
        margin-bottom: $mb15;
    }
</style>