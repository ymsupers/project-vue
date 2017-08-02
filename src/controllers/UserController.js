/**
 * Created by Administrator on 2017/8/1 0001.
 */
const UserModel = require('../model/UserModel');
module.exports = {
    'post_add': function (req, res) {
        var data = Object.create(null);
        data.username = req.body.username;
        data.password = req.body.password;
        data.nickname = req.body.nickname;
        var user = new UserModel();
        user.insert(data, function (result) {
            if (result) {
                res.json({ 'code': 200, 'data': result, 'errMsg': '成功' });
            } else {
                res.json({ 'code': 500, 'errMsg': '系统错误' });
            }
        });
    },
    'post_login': function (req, res) {
        var user = new UserModel();
        user.findOne({username: req.body.username}, function (result) {
            if (!result) {
                res.json({ 'code': 404, 'data': null, 'errMsg': '用户名不存在' });
            } else {
                if (result.password !== req.body.password) {
                    res.json({ 'code': 200, 'data': null, 'errMsg': '密码错误' });
                } else {
                    result.password = '***abx';
                    res.json({ 'code': 200, 'data': result, 'errMsg': '登录成功' });
                }
            }
        });
    }
};