/**
 * @file 构建类之间的继承关系
 * @author errorrik(errorrik@gmail.com)
 */

var extend = require('./extend');

/**
 * 构建类之间的继承关系
 *
 * @param {Function} subClass 子类函数
 * @param {Function} superClass 父类函数
 */
// 关于这个继承函数可以画张图
function inherits(subClass, superClass) {
    var subClassProto = subClass.prototype;
    var F = new Function();
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    extend(subClass.prototype, subClassProto);
}

exports = module.exports = inherits;
