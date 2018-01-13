/**
 * @file 把 camel case 字符串转换成 kebab case
 */

// #[begin] ssr
/**
 * 把 camel case 字符串转换成 kebab case
 *
 * @param {string} source 源字符串
 * @return {string}
 */
// 将驼峰的形式转化成用横线隔开
function camel2kebab(source) {
    // 匹配所有的大写字母，然后将其转化为-小写字母的形式
    return source.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}
// #[end]

exports = module.exports = camel2kebab;
