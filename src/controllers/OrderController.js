/**
 * Created by Administrator on 2017/8/1 0001.
 */
let OrderModel = require('../model/OrderModel');
module.exports = {
  'get_index': function (req, res) {
      var order = new OrderModel();
      order.insert({ orderNum: 'NO:123456789', orderName: '订单名称' });
      res.send('订单');
  },
  'get_list': function (req, res) {
      res.send('Hello Order List');
  }
};