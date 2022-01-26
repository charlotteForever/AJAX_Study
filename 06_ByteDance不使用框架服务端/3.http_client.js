const http = require('http')

// 准备要发送的数据
const body = JSON.stringify({ mag: 'hello from my client' })

const req = http.request('http://127.0.0.1:3000', {
    // post方法才可以携带body给server
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',//发送的数据类型为json
        'Content-Length': body.length
    }
}, (res) => {//当接收到服务端传来的数据之后，触发此回调函数
    const bufs = []
    res.on('data', (data) => {
        // 把接收到的buffer数据接收到一个buffer数组里
        bufs.push(data)
    })
    // 当数据传输结束之后
    res.on('end', () => {
        // const result = Buffer.concat(bufs).toJSON()
        const result = JSON.stringify(Buffer.concat(bufs).toString('utf8'))
        console.log('receive:' + result)
    })
})
req.end(body)//发送body数据