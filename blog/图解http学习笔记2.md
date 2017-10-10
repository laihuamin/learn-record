## 《图解http》学习笔记（二）
### 概念概述
- 请求的整过程
![image](https://user-images.githubusercontent.com/28126886/30865354-f29beb5e-a29b-11e7-900e-c7bda296964a.png)
- URI
> URI是资源统一标识符，Uniform Resource Identifier的缩写
- Uniform
> 规定统一的格式可以方便处理不同类型的资源，不用根据上下文来识别资源指定的访问方式,如：http或ftp
- Resource
> 资源的定义是“可标识的任何东西”，除了文档文件、图像或服务，全部都可以作为资源
- Identifier
> 表示可标识的对象
- URI的格式
![image](https://user-images.githubusercontent.com/28126886/30866794-d3f12d0a-a29f-11e7-9956-72725c62dbc1.png)
- http协议
> http和其他众多的协议相同，用于客户端和服务端的通信
- 请求和响应
> 请求必定由客户端发出，响应必定由服务端发出
- 响应报文
> 响应报文基本由协议版本、状态码、用来解释状态码的短语、可选的响应头部字段以及实体主体构成
- 无状态协议
> http是一种不保存状态的协议，本身不对通信过程进行保存
- Cookie
> 因为http不是一种保存状态的协议，需要登陆信息等进行保存，就引入了Cookie技术，管理状态
- GET
 > 用来请求访问已被URI识别的资源
- POST
 > 用来传输实体的主体，虽然GET也可以用来传输实体的主体，但是一般不用GET而用POST
- PUT
> 用来传输文件，PUT文件上传本身不带验证机制，任何人都可以上传，存在安全问题，因此一般网站不使用这个方法
- HEAD
> 和GET方法一样，知识不返回报文主体
- DELETE
> 用来删除文件和PUT方法相反，一样没有验证机制，任何人都可以操作
- OPTIONS
> 询问针对请求URI资源支持的方法
- TRACE
> 让web服务端将之前的请求通信环回给客户端的方法
- TRACE过程
> 客户端通过TRACE方法可以查询发送出去的请求是怎么样被加工修改或者篡改的，因为请求想要连接到服务器中间可能会通过代理中转，TRACE方法就是用来确认连接过程中发生的一切
- CONNECT
CONNECT方法要求在与代理服务器通信时建立隧道，实现用隧道协议进行TCP通信。主要使用SSL和TLS协议把通信内容加密后经网络隧道传输
- 总结
在众多方法中LINK和UNLINK已经在http1.1中被废弃
![httpMethod](http://laihuamin.oss-cn-beijing.aliyuncs.com/http-method.png)