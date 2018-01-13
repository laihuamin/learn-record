/**
 * @file bind函数
 */

/**
 * Function.prototype.bind 方法的兼容性封装
 *
 * @param {Function} func 要bind的函数
 * @param {Object} thisArg this指向对象
 * @param {...*} args 预设的初始参数
 * @return {Function}
 */

function bind(func, thisArg) {
    // 先获取原生的方法
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    // 如果有原生的bind方法且原生的bind函数被修改，将进入这个循环
    if (nativeBind && func.bind === nativeBind) {
        // slice.call(arguments, 1)就是将thisArg转化成数组,因为apply只接受数组
        return nativeBind.apply(func, slice.call(arguments, 1));
    }
    // 反之，则走一下流程，我们将自己创建bind方法
    // args就是预设的初始参数,也就是除了func和thisArg以外的参数
    var args = slice.call(arguments, 2);
    // 这里采用了闭包，用apply方法代替bind
    return function () {
        return func.apply(thisArg, args.concat(slice.call(arguments)));
    };
}

exports = module.exports = bind;
