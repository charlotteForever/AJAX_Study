JSON比XML更简洁，更灵活，现在都用JSON

## HTTP协议

### 请求报文

```bash
#行	
GET或POST /s?ie=utf-8	HTTP/1.1(版本)
#头 	以键值对的形式
HOST:atguigu.com
Cookie:name=guigu
Content-type:application/x-www-form-urlenco
User-Agent:chrome 83
#空行

#体
username=admin&password=admin
```

### 响应报文

```bash
#行 200是响应状态码 OK是相应字符串
HTTP/1.1	200	OK
#响应头 以键值对的形式
Content-Type:text/html;charset=utf-8
Content-length:2048
Content-encoding:gzip
#空行

#响应体
<html>
	<head>
	</head>
	<body>
		<h1>尚硅谷</h1>
	</body>
</html>
```

在network中查看请求和响应报文

## express框架







XHR:AJAX请求进行筛选