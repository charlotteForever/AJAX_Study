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

## 设置请求头

一般来放身份校验的信息

**可以加预定义的请求头**

```javascript
 xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
```

**也可以加自定义的请求头**

```javascript
xhr.setRequestHeader('name', 'atguigu')
```

如果要自定义请求头的名字，需要在server端加上，允许任意类型的请求头

```javascript
    response.setHeader('Access-Control-Allow-Headers', '*');
```

加了之后还是会报错，这是因为：

> 未出现过的请求头，还会发送一个options请求来校验这个请求头到底可不可以用。但是一般来说服务端只有响应`get`和`post`请求的，不能响应额外的options请求

处理：

> 在server端，处理post请求改为处理all请求

## 服务端响应JSON数据 

## IE本地缓存问题

IE浏览器中，向服务端发一次请求拿到数据，会在浏览器里进行缓存，再发第二次请求的时候，如果url相同，会从缓存里直接拿数据

**解决**：



## 延迟和网络异常

**关于模拟网络延迟**

在server里，给send设置一个延时

```javascript
setTimeout(() => {
        response.send('延时响应')
    }, 3000)
```

**关于模拟网络异常**

在浏览器里手动关闭网络，网络状态设置为`offline`。

**关于延迟的处理**

可以设置最大容忍延迟的事件`timeout`，一旦延迟超过了这个时间，就取消请求，并做出一些提示和响应。

```javascript
// 设置timeout参数，如果两秒没有响应，就取消请求
xhr.timeout = 2000
// 设置超时时的回调
xhr.ontimeout = function () {
    alert('网络异常')
}
```

**关于网络异常的处理**

```javascript
// 网络异常回调
xhr.onerror = function () {
    alert('sorry……你的网络好像出了点问题')
}
```

## 手动取消请求

利用请求实例对象身上的abort方法，取消`还没有被响应`的请求

## 取消重复请求

一个请求的响应需要一段时间，如果用户没有收到响应而一直发送请求，服务器的压力就会很大。

解决：取消上一个还没响应的请求，重新创建一个请求
