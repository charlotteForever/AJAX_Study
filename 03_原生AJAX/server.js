// 1.引入express
const express = require('express');
// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');//设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');//设置允许自定义请求头
    // 发送对象类型的
    let stu = { name: '张三', age: 19 }
    let str = JSON.stringify(stu);
    response.send(str)
})

// 监听端口响应
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...');
})
// http://127.0.0.1:8000/ 在浏览器打开后输出：你好！express