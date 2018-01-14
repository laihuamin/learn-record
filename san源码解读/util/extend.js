/**
 * @file 属性拷贝
 */

/**
 * 对象属性拷贝
 *
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @return {Object} 返回目标对象
 */
function extend(target, source) {
    // 遍历对象
    for (var key in source) {
        // 判断一下这个对象是否是自身的属性或方法
        if (source.hasOwnProperty(key)) {
            // 把source的拷贝到target中
            target[key] = source[key];
        }
    }
    // 返回目标对象
    return target;
}

exports = module.exports = extend;
