/**
 * Created by Administrator on 2017/8/1 0001.
 */
const Sequelize = require('sequelize');
var CommonModel = require('./CommonModel');
module.exports =  class UserModel extends CommonModel {
    constructor() {
        super('user', {
            username: {
                type: Sequelize.STRING, // 字段类型
                comment: '用户名' // 字段描述信息
            },
            password: {
                type: Sequelize.STRING,
                commit: '密码'
            },
            nickname: {
                type: Sequelize.STRING,
                commit: '昵称'
            }
        }, {
            indexes: [{unique: true, fields: ['username']}]
        });
    }
};
