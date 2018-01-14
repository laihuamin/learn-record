/**
 * @file 创建数据检测函数
 * @author leon<ludafa@outlook.com>
 */


// #[begin] error

/**
 * 创建数据检测函数
 *
 * @param  {Object} dataTypes     数据格式
 * @param  {string} componentName 组件名
 * @return {Function}
 */
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
