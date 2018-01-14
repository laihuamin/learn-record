/**
 * @file 遍历数组
 */

var bind = require('./bind');

/**
 * 遍历数组集合
 *
 * @param {Array} array 数组源
 * @param {function(Any,number):boolean} iterator 遍历函数
 * @param {Object=} thisArg this指向对象
 */

//  这边是重新封装了each方法,让数组中的所有元素运行一个方法
function each(array, iterator, thisArg) {
    if (array && array.length > 0) {
        if (thisArg) {
            iterator = bind(iterator, thisArg);
        }
        // 如果有不满足条件的元素，跳出循环
        for (var i = 0, l = array.length; i < l; i++) {
            if (iterator(array[i], i) === false) {
                break;
            }
        }
    }
}

exports = module.exports = each;
