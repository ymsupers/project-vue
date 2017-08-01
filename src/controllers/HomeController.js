/**
 * Created by Administrator on 2017/8/1 0001.
 */
let UserModel = require('../model/UserModel');
let OrderModel = require('../model/OrderModel');
module.exports = {
  'get_index': function (req, res) {
      var user = new UserModel();
      var result = user.insert({ firstName: 'John', lastName: 'Hancock' });
      res.send('Welcome use express-controller, The is Home controller.');
  },

};