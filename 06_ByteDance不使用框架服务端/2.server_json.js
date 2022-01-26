const http = require('http')

const port = 3000

const server = http.createServer((requst, response) => {
    const bufs = []
    // 每当连接返回给我一段data数据,放到http body上
    requst.on('data', (data) => {
        bufs.push(data)
    })
    // end事件触发时，数据传输结束，把数据从http body上拿出来
    requst.on('end', () => {
        // bufs多个缓冲区先转为一个缓冲区(concat);在转为字符
        const buf = Buffer.concat(bufs).toString('utf8')
        try {
            // 字符转为json
            const ret = JSON.parse(buf)
            const msg = ret.msg | 'hello!'
            const responseJson = {
                msg: `receive: ${msg}`
            }
            response.setHeader('Content-Type', 'application / json')
            response.end(JSON.stringify(responseJson))
        } catch (err) {
            response.end('invalid json')
        }
    })
})

server.listen(port, () => {
    console.log('端口' + port + '正在监听中……')
})