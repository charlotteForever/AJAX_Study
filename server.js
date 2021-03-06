const express = require('express');
const app = express();

//针对json
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');//设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');//设置允许自定义请求头
    // 发送对象类型的
    let stu = { name: '张三', age: 19 }
    let str = JSON.stringify(stu);
    response.send(str)
})
// 针对延时
app.all('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');//设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');//设置允许自定义请求头
    setTimeout(() => {
        response.send('延时响应')
    }, 3000)
})

// 针对axios
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');//设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');//设置允许自定义请求头
    let data = { name: 'caicai' }
    response.send(JSON.stringify(data))
})
// 针对fetch
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');//设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*');//设置允许自定义请求头
    let data = { name: 'woshicaicai' }
    response.send(JSON.stringify(data))
})
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...');
})