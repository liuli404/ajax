// 1.引入express
const { request, response, json } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// get请求
app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('Hello Express!!');
});

// post请求
app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('He2llo POST -2!!');
});

// json响应
app.get('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: 'liuli'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    response.send(data);
});

// ie缓存
app.get('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('静静 ++ !!');
});

// 延迟响应
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('延迟响应');
    }, 3000);
});

// jquery服务
app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = { name: 'liuli', sex: 'nan' }
    response.send(JSON.stringify(data));
});




// 4.启动监听端口
app.listen(8000, () => {
    console.log("8000端口已启动！");
});