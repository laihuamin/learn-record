### 偏函数的形式

偏函数是通过使用指定参数来创建函数的一种方式。
举个例子：

```js
var toString = Object.prototype.toString;

var isString = function(obj) {
  return toString.call(obj) == '[Object String]';
}

var isFunction = function(obj) {
  return toString.call(obj) == '[Object Function]';
}
```
但是可以进行简易的封装.

```js
var toString = Object.prototype.toString();

var isType = function(type) {
  return function(obj) {
    return toString.call(obj) == '[Object ' + type + ']';
  }
}

var isString = isType('String')
vat isFunction = isType('Function')
```

### 难点

1、异常处理 

由于是异步的环境，所以不一定能用try和catch来调试程序。

2、函数嵌套过深

node是单进程的，所以要好好利用异步的优势

3、阻塞代码

node没有sleep这样的函数，所以在进程休眠这一块，需要好好用到定时器和计时器

4、多线程编程

如果服务器是多核的，随着应用越来越复杂，所以我们需要web workers来更好的利用cpu的多核来进行计算。

5、异步转同步

### 异步编程的解决方案

1、事件的发布/订阅

事件监听是一种广泛的异步模式。node中自带events模块，比前端浏览器简单多，因为没有dom操作，所以没有preventDefault,stopPropagation等控制事件的方法。具有addListener/on()、once()、removeListener()、removeAllListener()、emit()方法。

- 为了node性能的稳健型，node对以下情况做了一些处理。
  - 对一个事件超过10个监听器，将会收到一个警告，调用emitter.setMaxListeners(0)可以解除警告，但是，确实对于一个事件的侦听器过多，会存在占用cpu的场景。
  - 如果一个事件中，没有对error对象进行侦听，如果有，node将会交给侦听器处理，但是如果没有，当发生error的时候，node会当作意外来处理，会引起进程退出。一个健壮的事件侦听实例需要对error事件进行处理。
  
- 关于事件的发布/订阅实例，详见书本76-82

2、Promise/Deferred模式

这个就不多介绍了，promise在浏览器中和node中，用法都是一样的，详见书本p82-92

3、流程控制库

- 尾触发和next
- async
- step
- wind

### 异步并发控制

异步容易实现，但是也需要控制，需要尽量压榨底层系统的性能，也需要对其进行过载保护。书本中提供了两个方案：

- bagpipe
- async

笔者认为这一块属于进阶类，而且书中描述也只有案例，有兴趣的可以看书本p105-109