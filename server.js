/**
 * Created by Administrator on 2017/8/1 0001.
 */
var express = require('express');
var expressController = require('express-controller');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// 监听服务端口
const PORT = 8008;

expressController
    .setDirectory(path.join(__dirname, 'src/controllers'))
    .bind(app);

// 设置视图加载路径
app.set('views', path.join(__dirname, 'src/views'));
// 设置 node.js 模板引擎
app.set('view engine', 'ejs');

// 使用 `bodyParser` 模块来获取 GET or POST 参数
app.use(bodyParser.urlencoded({extended: false}));

// 设置静态资源文件路径
app.use(express.static('asset'));

// 创建并启动一个WEB容器
var server = app.listen(PORT, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server runing at %s:%s', 'http://127.0.0.1', port);
});