/**
 * Created by Administrator on 2017/8/1 0001.
 */
const Sequelize = require('sequelize');
var CommonModel = require('./CommonModel');

module.exports = class OrderModel extends CommonModel {
  constructor () {
      super('order', {
          orderName: {
              type: Sequelize.STRING
          },
          orderNum: {
              type: Sequelize.STRING
          }
      });
  }
};