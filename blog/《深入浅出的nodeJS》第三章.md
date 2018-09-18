### 阻塞I/O和非阻塞I/O

阻塞I/O的特点是调用之后一定需要等到系统内核层面完全结束之后，才会继续进行后续步骤。

非阻塞I/O特点是在调用之后即可返回，但是返回是不带有任何数据的，需要再次使用文件描述符取查询。

### 轮询技术

- read

最原始，性能最低的一种，通过反复检查来
- select
- poll
- epoll
- kqueue

### 理想的非阻塞异步I/O和现实中的非阻塞异步I/O


### IOCP

调用异步方法，等待I/O完成之后的通知，执行回调，不用考虑轮询。

### 事件循环

node自身会调用一个事件循环，称为tick，每次进程启动，会执行一个while(true)类似的事件循环体

![message-queue.png](https://i.loli.net/2018/08/25/5b811bf73e8c0.png)


### 观察者

观察者是一个重要的媒介，事件循环通过这个来判断是否还有其他事件要处理，每次事件的产生都会伴随着观察者，而事件循环将会从观察者那取事件并处理。

### 定时器

setTimeout和setInterval，与浏览器的实现方式一致,原理是将定时器插入到观察者内部的一个红黑树中。每次执行Tick，就从红黑树中迭代出一个定时器，判断他的时间是否超时，如果已经超时，形成事件，执行回调函数。

### process.nextTick()

process.nextTick()在执行完本轮之后，立即执行一个异步操作，对比定时器，时间复杂度为O(1)

### setImmediate()

其实setImmediate和process.nextTick()作用是相似的，但是在异步队列中，setImmediate的执行顺序是在process.nextTick之后的，而且setImediate只能执行一个，而process.nextTick是把每一轮循环中所有的回调全部执行完毕。