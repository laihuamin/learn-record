- 响应首部字段

| 首部字段名称 | 说明 |
| --- |:---|
| Accrpt-Ranges | 是否接受范围请求 |
| Age | 推算资源创建经过时间 |
| ETag | 资源匹配信息 |
| Location | 令客户端重定向的URI |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After | 对再次发起请求的时机要求 |
| Server | HTTP服务器的安装信息 |
| Vary | 代理服务器缓存的管理信息 |
| WWW-Authenticate | 服务器对客户端的认证信息 |

- 实体首部字段

| 首部字段名称 | 说明 |
| --- |:---|
| Allow | 资源支持的HTTP方法 |
| Content-Encoding | 实体主体适合的编码方式 |
| Content-Language | 实体主体的自然语言 |
| Content-Length | 实体主体的大小 |
| Content-Location | 替代对应资源的URI |
| Content-MD5 | 实体主体的报文摘要 |
| Content-Range | 实体主体的位置范围 |
| Content-Type | 实体主体的媒体类型 |
| Expires | 实体主体过期的时间 |
| Last-Modified | 资源最后的修改时间 |

- 非HTTP1.1首部字段

HTTP协议中的首部字段，不限于RFC2616中定义的47中字段，还有Cookie、Set-Cookie、Content-Disposition等

- 端到端首部（End-to-end）

分到此类别中的首部会被转发给请求／响应对应的最终接收目标，且必须保存到缓存生成的响应中，规定中它必须被转发

- 逐跳首部（Hop-by-hop）

分在此类别中的首部只对单次转发有效，会因通过缓存或者代理而不在转发。HTTP/1.1和之后版本中，需要使用逐条首部，需要使用Connection首部字段

- Cache-Control

通过Cache-Control首部字段，就能操作缓存的工作机制,参数可选的，多个指令之间通过“，”分隔

- 缓存请求指令一览

| 指令 | 参数 |说明|
| - |:--:|:--:|
|no-cache|无|强制向源服务器再次验证|
|no-store|无|不缓存请求或者响应的任何内容|
|max-age|必需|响应的最大Age值|
|max-stale|可省略|接受已过期的响应|
|min-fresh|必需|期望在指定的时间内响应任有效|
|no-transform|无|代理不可更改媒体类型|
|only-if-cache|无|从缓存获取资源|
|cache-extension|-|新指令标志（token）|

- 缓存响应指令

| 指令 | 参数 |说明|
| - |:--:|:--:|
|public|无|可向任意方提供响应缓存|
|private|可省略|仅向指定用户返回响应|
|no-cache|可省略|缓存前必须先确认有效性|
|no-store|无|不缓存请求或响应的任何内容|
|no-transform|无|代理不可更改媒体类型|
|must-revalidate|无|可缓存但必须再向源服务器进行|
|proxy-revalidate|无|要求中间缓存服务器对缓存的有效性进行再次确认|
|max-age|必须|响应的Age值|
|s-maxage|必须|公共缓存服务器响应的最大Age|
|cache-extension|-|新指令标记（token）|

- public

该指令表示任意一方都可以使用缓存

- private

当使用这条指令时，响应只以特定用户作为对象，这点和public相反

- no-cache

使用no-cache是防止返回的资源过期，如果服务器返回的响应资源中包含no-cache指令，那么缓存服务器不能对资源进行缓存。如果，源服务器以后也将不再对服务器请求中的资源进行有效性确认，且禁止其对资源进行缓存操作

- no-store

当使用no-store指令时，暗示请求或响应中包含机密信息，缓存不能在本地存储请求或响应的任意部分

- 注意

no-cache代表不缓存过期资源，缓存会向源服务器进行有效性确认后处理资源，而no-store才是真正的不缓存。

- s-maxage

该指令的功能和max-age功能相同，它们之间的区别时s-maxage这个指令适用于提供多用户的公共的缓存服务器（代理），对于同一用户重复返回响应的服务器来说没有任何作用

- max-age

该指令代表最大的缓存时长，在该时长内，不必再向源服务器确认。当max-age这个值等于0时，该资源需要向源服务器确认之后，看资源是否有效，相当于no-cache

- 注意

在HTTP/1.1中，max-age和Expires同时出现时，max-age有效，而Expires会被忽略。

- min-fresh

指令要求缓存服务器返回至少还未过指定时间缓存资源

- max-stale

使用该指令可指示缓存资源，即使过期照常接收

- only-if-cache

使用该指令表示客户端仅在缓存服务器本地缓存目标资源的请求下才会要求其返回，换言之，该指令要求缓存服务器不重新加载响应，也不会再次确认资源有效性。若发生请求缓存服务器的本地缓存无响应，则返回504

- must-revalidate

使用该指令，代理会向资源服务器再次验证即将返回的响应缓存目前是否有效

- proxy-revalidate

指令要求所有的缓存服务器在接收到客户端带有改制ing的请求返回响应之前，必须再次验证缓存的有效性

- no-transform

指令规定无论是在请求中还是响应中，缓存都不能改变实体主体的媒体类型