## 《图解http》学习笔记（五）

- web托管服务

用一台服务器为多个用户提供服务，也可以为持有域名的提供不同的网站，可个利用了虚拟主机

- 功能实现

在相同的ip的地址下，由于虚拟主机可以寄存多个不同主机名和域名的web网站，因此在发送http请求的时候，必须在host首部内完整制定主机名和域名的URI

- 代理

代理是一种有转发功能的应用程序，他扮演着一个服务端和客户端中间人的角色

- 网关

网关是转发其他服务器通信数据的服务器

- 隧道

隧道是在相隔甚远的客户端和服务端两者之间进行中转，并保持双方通信连接的应用程序

- 代理服务器

接收客户端发送的请求转发给其他服务器。

- 使用代理服务器的理由

利用缓存技术减少网络带宽的流量

- 代理服务器的使用方法

基于两种分类：一种是是否使用缓存，另一种是否会修改报文

- 缓存代理

当响应发生时，缓存代理服务器就会将资源缓存到代理服务器上，那样当再次发起请求时，就不用在去源服务器上获取资源

- 透明代理

转发请求时，不对报文做任何加工，反之则为，非透明代理

- 网关的好处

利用网关可以提高通信的安全性，可以在客户端与网关之间的通信线路上加密以确保安全

- 隧道的目的

确保客户端与服务端进行安全通信，隧道会使用ssl加密等手段进行通信，隧道本身不会解析http请求，是透明化的，当连接断开时，隧道也随之结束

- 缓存

缓存指的是代理服务器或客户端本地资源的缓存副本，利用缓存可以大大减少源服务器的访问时间，节省了通信流量和通信时间

- FTP

传输文件时使用的协议。