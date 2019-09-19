// 引入模块
const router = require('./router');
const express = require("express");
const bodyParser = require('body-parser');

// 创建服务器
const app = express();

// 开启服务器 设置端口
app.listen(8848, () => {
  console.log("http://127.0.0.1:8848 服务器开启成功");
});

// 暴露静态资源
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));

// 设置默认模板
app.set('view engine', 'ejs');
// 设置模板引擎默认路径
app.set('views','views');
// 设置获取post的请求的body-parser第三方模块
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 设置路由
app.use(router);
