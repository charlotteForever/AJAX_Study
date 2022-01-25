// 每当连接返回给我一段data数据
const http = require('http')

const port = 3000

const server = http.createServer((requst, response) => {
    response.end('hello')
})

server.listen(port, () => {
    console.log('端口' + port + '正在监听中……')
})