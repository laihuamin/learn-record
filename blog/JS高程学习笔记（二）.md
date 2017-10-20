- 标识符定义规范

1.第一个字符必须是一个字母或者_、$
2.其他字符可以是字母、_、$、数字
3.不能把关键字和保留字做为标识符

- 花括号

最佳实践是始终在控制语句中使用代码块——即使只有一句代码

- 变量类型

ECMAScript的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据

- 未初始化变量

在js中对于未初始化的变量的时候，js会给这个变量保存一个特殊值——undefined

- 省略var操作符

省略了var的操作符，这个变量就会变成全局变量

- 数据类型

ES有六种简单数据类型：undefined、null、Boolean、Number、String、Symbol
还有一种复杂数据类型：Object，Object本质是由一组无序的名值对组成的

- typeof操作符

有一种手段来检测数据类型——typeof，它就是负责提供这方面信息的操作符

- typrof操作符的结果比对
1.undefined代表这个变量  未定义
2.boolean代表这个变量  布尔值
3.string代表这个变量  字符串
4.number代表这个变量  数值
5.object代表这个变量  对象或null
6.function代表这个变量  函数

- 注意

函数在ES中属于对象，但是函数确实有自己的一些特性，所以我们用typeof这个操作符来区分函数和对象

- undefined

undefined这个值代表的是变量定义却未初始化，但是和没有声明变量还是有区别的

- 注意

但是在typeof操作符下面，会发生变量未初始化或者变量未声明都会返回undefined

- Null

null本身代表的是一个空对象指针，所以typeof操作符检测null值时会返回object的原因，如果变量准备将来用于保存对象，那么最好将该变量初始化为null而不是其他值

- Boolean

ES中所有的任何类型都有与这两个Boolean值等价的值，要将任意值转化为其对应的Boolean值，可以调用转型函数Boolean()

- 转化规则

| 数据类型 | true | false |
|:---:|:---:|:---:|
| String | 任何非空字符串 | 空字符串 |
| Number | 任何非零数和NaN | 0和NaN |
| Object | 任何对象 | null |
| Undefined | | undefined |

- Number注意点

在其他语言中，任意一个数值除以0都会导致错误，从而停止代码执行。但是在ES中不同，ES会返回NaN，NaN这个东西又很特殊，NaN是缩写，扩展名是Not a Number，这个东西自身都不等于自身，然后可以用isNaN这个接口去检查

- 数值转换

一共有三种接口可以将别的数据转化成Number类型，分别是Number()、parseInt()、parseFloat()这么三个接口。

- Number()

|数据类型|转化后的Number值|
|:---:|:---:|
|Boolean|true和false会被转换成1和0|
|null|会被转化成0|
|Number|直接转化成相应的值|
|undefined|NaN|
|string|分情况：如果说是'1'或者'1.1'或者''会被相应转化成1、1.1、0，除此之外都会被转化成NaN|
|对象|会调用valueOf方法，按照前面规则转化，如果转化结果是NaN的话，会调用对象的toString方法，依次按照前面的规则转化|

对于这个接口另题一笔，一元加号操作符也可以达到这个效果

- parseInt()

这个函数和Number还是有区别的，当第一个字符是不是数字或者负号时，会直接返回NaN，当第一个字符时数值时，parseInt会直接解析第二个，当发生一下这种情况时，'1234blue'会直接返回1234，当是个浮点型时，会直接忽略小数点后面的，返回整数部分parseInt不会解析八进制，前面的0会直接忽略

-string

字符串一旦创建值就不会发生改变，当发生改变的时候，会先销毁原来的值，然后用改变后的值去填充这个变量

- 字符串的转化

toString()这个方法几乎每个类型都会有这个方法，除了undefined和null没有。

- 转化规则

其他类型的数值可以调用toString这个函数去转化，但null和undefined这么两个值，可以中String这个方法转化，这样会得到'null'和'undefined'

- Object

Object的所有属性和方法都可以存在于一个具体的对象中

- Object拥有的属性和方法

|属性和方法|说明|
|:--:|:--:|
|constructor|指的就是创建这个对象的函数|
|hasOwnProperty|这个函数可以检查给定的属性在实例自己的原型中是否存在，作为参数的属性，必须以字符串的形式|
|isPrototypeOf|用于检查对象是否是另一个对象的原型|
|propertyIsEnumerable|表示这属性是否能被for in遍历，和hasOwnProperty一样，参数必须是字符串类型|
|toLocaleString|返回对象的字符串表示，该字符串与执行环境的地区一致|
|toString|返回对象的字符串表示|
|valueOf|返回对象的字符串、数值和布尔值，一般和toString返回的类型一致|