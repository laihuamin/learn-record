/**
 * @file 判断数组中是否包含某项
 */

var each = require('./each');

/**
 * 判断数组中是否包含某项
 *
 * @param {Array} array 数组
 * @param {*} value 包含的项
 * @return {boolean}
 */

function contains(array, value) {
    // 定义一个变量作为判断标准
    var result = false;
    // 对数组遍历，如果数组中含有这一项result的结果就是true，然后返回的是false，那么就能跳出循环
    each(array, function (item) {
        result = item === value;
        return !result;
    });
    // 最后返回结果
    return result;
}

exports = module.exports = contains;
