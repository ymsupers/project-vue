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
    constructor(tableName, tableModel) {
        const Table = sequelize.define(tableName, tableModel);
        this.insert = function ($data) {
            Table.sync({force: false}).then(() => {
                return Table.create($data);
            });
        };
        this.update = function () {
            console.log('update')
        };
    }
}

module.exports = CommonModel;