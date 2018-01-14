/**
 * @file 把 kebab case 字符串转换成 camel case
 */

/**
 * 把 kebab case 字符串转换成 camel case
 *
 * @param {string} source 源字符串
 * @return {string}
 */
function kebab2camel(source) {
    // 匹配带横岗的字母，将其转化为大写字母
    return source.replace(/-([a-z])/g, function (match, alpha) {
        // 这里有人可能看不懂这个function的参数是怎么来的，可以自己去MDN上看一下replace方法的function的参数，一共有4个
        return alpha.toUpperCase();
    });
}

exports = module.exports = kebab2camel;
