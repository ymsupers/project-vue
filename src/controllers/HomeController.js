/**
 * Created by Administrator on 2017/8/1 0001.
 */
module.exports = {
  'get_index': function (req, res) {
      res.render('index', { title: 'vue实践' });
  },
};