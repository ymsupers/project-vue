/**
 * Created by Administrator on 2017/8/1 0001.
 */
const Sequelize = require('sequelize');
var CommonModel = require('./CommonModel');
module.exports =  class UserModel extends CommonModel {
    constructor() {
        super('user', {
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            }
        });
    }
};
