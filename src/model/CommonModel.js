/**
 * Created by Administrator on 2017/8/1 0001.
 */
const Sequelize = require('sequelize');
const db = require('../../config/db');

const sequelize = new Sequelize(db.database, db.user, db.pass, {
    host: db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
// START: 检查 `Sequelize` 链接mysql 状态
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
// START: ok

class CommonModel {
    constructor(tableName, tableModel, options) {
        const Model = sequelize.define(tableName, tableModel, Object.assign({
            timestamps: false
        },options));

        // START: 插入数据
        this.insert = function ($data, callback) {
            Model.sync().then(() => {
                Model.create($data).then(result => {
                    callback(result.id);
                }).catch(e => {
                    console.log('执行插入失败!错误原因:', e);
                    callback(0);
                });
            });
        }
        // START: ok

        // START: 单个查询数据
        this.findOne = function ($map, callback) {
            Model.findOne({where: $map}).then(users => {
                callback(users);
            });
        }
        // START: ok

    }
}

module.exports = CommonModel;