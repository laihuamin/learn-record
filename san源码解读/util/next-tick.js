/**
 * @file 在下一个时间周期运行任务
 * @description
 */

// 该方法参照了vue2.5.0的实现，感谢vue团队
// SEE: https://github.com/vuejs/vue/blob/0948d999f2fddf9f90991956493f976273c5da1f/src/core/util/env.js#L68


var bind = require('./bind');
var each = require('./each');

/**
 * 下一个周期要执行的任务列表
 */
var nextTasks = [];

/**
 * 执行下一个周期任务的函数
 * @type {Function}
 */
var nextHandler;

/**
 * 浏览器是否支持原生Promise
 * 对Promise做判断，是为了禁用一些不严谨的Promise的polyfill
 * @inner
 * @type {boolean}
 */
// 当你打印Promise.toString()的结果是function Promise() { [native code] }
var isNativePromise = typeof Promise === 'function' && /native code/.test(Promise.toString());

/**
 * 在下一个时间周期运行任务
 * @param {Function} fn 要运行的任务函数
 * @param {Object=} thisArg this指向对象
 */
function nextTick(fn, thisArg) {
    // 如果有指定对象就绑定指定对象
    if (thisArg) {
        fn = bind(fn, thisArg);
    }
    // 把运行的函数推入任务栈
    nextTasks.push(fn);
    // 如果有正在执行的函数，那么return
    if (nextHandler) {
        return;
    }
    
    nextHandler = function () {
        // 从下一个任务栈中拷贝任务
        var tasks = nextTasks.slice(0);
        // 之后清空nextTicks任务栈
        nextTasks = [];
        // 清空之前的nextHander
        nextHandler = null;
        // 执行每一个任务
        each(tasks, function (task) {
            task();
        });
    };

    // 非标准方法，但是此方法非常吻合要求。目前只有IE10实现了这个方法
    if (typeof setImmediate === 'function') {
        setImmediate(nextHandler);
    }
    // 用MessageChannel去做setImmediate的polyfill
    // 原理是将新的message事件加入到原有的dom events之后
    // https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic 这个上面有这个方法的一个实例
    else if (typeof MessageChannel === 'function') {
        var channel = new MessageChannel();
        var port = channel.port2;
        channel.port1.onmessage = nextHandler;
        port.postMessage(1);
    }
    // for native app
    // 如果支持原生的promise方法，那么就调用nextHandler
    else if (isNativePromise) {
        Promise.resolve().then(nextHandler);
    }
    else {
        // 如果上述方法都不支持，那么调用定时器
        setTimeout(nextHandler, 0);
    }
}

exports = module.exports = nextTick;
