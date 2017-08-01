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
            console.log(result);
        });
    }
};