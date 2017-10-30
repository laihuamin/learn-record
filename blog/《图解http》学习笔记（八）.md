- cache-extension

Cache-Control首部字段本身没有community指令，借助extension tokens实现了该指令的添加

- Connection

该首部字段具有两个作用：1、控制不在转发给代理的首部字段。2、管道持久连接

- 控制不再转发给代理的首部字段

![Connection](http://laihuamin.oss-cn-beijing.aliyuncs.com/Connection.png)

- 管理持久连接

HTTP/1.1版本的默认都是持久连接，服务端希望断开连接时，会将Connection设置为close，而在HTTP/1.1之前，默认的时非持久连接，如果需要持久连接，需要指定Connection字段的值为Keep-Alive。

- Date

首部字段Date表明创建HTTP报文的日期和时间，在HTTP/1.1中的格式如下:
```
Date:Tue,03Jul 2012 04:40:59 GMT
```

- Pragma

该首部字段属于通用字段，是HTTP/1.1之前版本的历史遗留字段，仅作为向后兼容使用

- Trailer

该首部字段会事先说明记录了哪些重要的首部字段，该首部字段可以编码传输

- Transfer-Encoding

该首部字段说明传输报文主体的编码方式

- Upgrade

该首部字段用于检测HTTP协议及其他协议是否可以使用更高的版本，它的参数可以用来制定一个完全不同的通信协议

- Via

使用首部字段Via是为了追踪客户端与服务端之间的响应或请求的传输路径。Via是为了追踪传输路径的，所以经常会和TRACE一起使用。

- Warning

该首部字段是HTTP1.1的，由http1.0的Retry-After演变过来，该首部字段通常会告知用户一些缓存相关的问题

- 警告码

|警告码|警告内容|说明|
|:--:|:--:|:--:|
|110|Response is stale(响应已过期)|代理返回的已经过期|
|111|Revalidation failed(在验证失败)|代理在验证资源有服务器无法达到的原因|
|112|Discontent operation(断开连接操作)|代理与互联网的连接断开|
|113|Heuristic expiration(试探性过期)|响应的使用期超过缓存设定的时间大于24小时，该响应超过24小时的时候发送
|199|Miscellaneous warning(杂项警告)|任意的警告内容|
|214|Transformation applied(使用了转换)|代理对内容编码或媒体类型等任意转换|
|299|Miscellaneous persistent warning(持久杂项警告)|与199不同的地方在于，会持续发出警告|

- Accept

该首部字段可以通知服务器，用户代理能够处理的媒体类型和媒体类型的相对优先级，若想要对媒体类型排优先级，则使用q=来额外表示权重值，用分号隔开，范围值0～1，可精确到小数点后3位

- Accept-charset

该首部字段可用来通知服务器用户代理支持的字符集及字符集的优先级，权重表示方法和Accept一样，该首部字段应用于内容协商机制的服务器驱动协商

- Accept-Encoding

该首部字段可以告知服务器用户代理支持编码方式和编码方式的优先级，权重表示方法和Accept一样，可一次性指定多个内容编码

- Accept-Language

该首部字段用来告知服务器用户代理能够处理的自然语言集以及他的优先级，可一次性指定多种自然语言集

- Authorization

该首部字段用来告知服务器，用户代理的认证信息

- Expect

该首部字段用来告知服务器期望出现的某种特定的行为。当服务器无法理解时，会返回状态码417

- From

该首部字段用来告知服务器使用用户代理的用户的电子邮件地址。