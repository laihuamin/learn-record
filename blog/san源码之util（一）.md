### bind.js

该函数是对原生的bind函数进行兼容性封装，有可以学习的地方，比较老的项目可以尝试自己封装，看一下源码：

```js
function bind(func, thisArg) {
    // 先获取原生的方法
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.apply(func, slice.call(arguments, 1));
    }

    var args = slice.call(arguments, 2);
    return function () {
        return func.apply(thisArg, args.concat(slice.call(arguments)));
    };
}

exports = module.exports = bind;

```


### camel2kebab.js
将驼峰的形式转化成短横纲形式的
```js
// 将驼峰的形式转化成用横线隔开
function camel2kebab(source) {
    // 匹配所有的大写字母，然后将其转化为-小写字母的形式
    return source.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}

exports = module.exports = camel2kebab;
```

### each.js
这边是重新封装了each方法,让数组中的所有元素运行一个方法

```js
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
```

### contains.js
看数组中是否含有该值

```js
var each = require('./each');

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
```

### createDataTypesChecker.js

校验data是否是dataTypes的数据格式

```js
function createDataTypesChecker(dataTypes, componentName) {

    /**
     * 校验 data 是否满足 data types 的格式
     */
    return function (data) {
        // 遍历对象
        for (var dataTypeName in dataTypes) {
            // 检测是否是自身含有方法
            if (dataTypes.hasOwnProperty(dataTypeName)) {

                var dataTypeChecker = dataTypes[dataTypeName];
                // 如果dataTypeChecker不是一个函数，那么抛出错误
                if (typeof dataTypeChecker !== 'function') {
                    throw new Error('[SAN ERROR] '
                        + componentName + ':' + dataTypeName + ' is invalid; '
                        + 'it must be a function, usually from san.DataTypes'
                    );
                }
                // 如果是函数，那么调用的这函数，去校验data是否满足dataTypes的格式
                dataTypeChecker(
                    data,
                    dataTypeName,
                    componentName,
                    dataTypeName
                );


            }
        }

    };

}

// #[end]

module.exports = createDataTypesChecker;

```