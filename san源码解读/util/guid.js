/**
 * @file 生成唯一id
 */


/**
 * 唯一id的起始值
 * @type {number}
 */
var guidIndex = 1;

/**
 * 获取唯一id
 * @inner
 * @return {string} 唯一id
 */
function guid() {
    // 每次调用函数guidIndex这个变量的值增加一
    return '_san_' + (guidIndex++);
}

exports = module.exports = guid;
