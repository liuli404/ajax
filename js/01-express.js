// 1.引入express
const { request, response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
app.get('/', (request, response) => {
    // 设置响应
    response.send('Hello Express!!');
});

// 4.启动监听端口
app.listen(8000, () => {
    console.log("8000端口已启动！");
});