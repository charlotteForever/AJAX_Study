// 1.引入express
const express = require('express');
// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是对请求报文的封装，response是对响应报文的封装
app.get('/', (request, response) => {
    response.send('你好！express')
});

// 监听端口响应
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})
// http://127.0.0.1:8000/ 在浏览器打开后输出：你好！express