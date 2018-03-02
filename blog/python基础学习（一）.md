### 变量的赋值
```py
counter = 100 # 赋值整型变量
miles = 1000.0 # 浮点型
name = "John" # 字符串
 
print counter
print miles
print name
```

### 多个变量赋值

```py
a = b = c = 1
a, b, c = 1, 2, "Jhon"
```

### 标准数据类型

- Numbers
- String
- List
- Tuple
- Dictionary

### python数字

python支持四种不同的数字类型：

- int
- long
- float
- complex

python支持复数，复数由实数部分和虚数部分，可以用a+bj或者complex(a,b)表示


### python字符串

字符串或串是由数字、字母、下划线组成的一串字符

字符串的两种取值顺序：

- 从左到右默认0开始，最大范围是长度减一
- 从右到左默认开始-1，最大范围是字符串开头

想要截取中间一段字符串，可以使用`变量[头下标:尾下标]`，我们举个例子：

```py
s = 'ilovepython'
s[1:5] # love
```
+是连接字符串，*是重复操作

```py
a = 'i'
b = 'love'

print a + b  # ilove
print b * 2  # lovelove
```

### python列表

list是python中使用最频繁的数据类型
它支持字符、数字、字符串甚至可以包含列表
列表切割也可以用[头下标:尾下标]，从左到右是索引默认0开始，从右到左默认-1开始。

加号(+)表示连接，星号(*)表示重复操作

```py
list = ['route', 786, 2.23, 'jhon', 70.2]
otherlist = [123, 'jhon']

print list # 打印表单
print list[0] # 输出表单第一个元素
print list[1:2] # 输出第二个和第三个元素
print list[2:] # 输出从第三个到末尾最后的元素
print list * 2 # 输出list两边
print list + otherlist # 打印两个的组合
```

### python元组

元组是另一种数据类型，类似于列表，元组用()表示，内部元素用逗号隔开，不能被二次赋值，相当于只读列表，不允许更新

### python字典

字典是除列表以外最灵活的内置数据结构类型，列表是有序的对象集合，字典是无序的对象集合。

两者的区别在于：字典用key值来存取，而不是偏移存取。

字典用“{}”标识。字典由索引(key)和它对应的值(value)组成。


```py
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"
 
tinydict = {'name': 'john','code':6734, 'dept': 'sales'}
 
 
print dict['one']          # 输出键为'one' 的值
print dict[2]              # 输出键为 2 的值
print tinydict             # 输出完整的字典
print tinydict.keys()      # 输出所有键
print tinydict.values()    # 输出所有值
```

### 数据类型转换

|函数|描述|
|:--:|:--:|
|int(x)|将x转换成一个整数|
|long(x)|创建一个长整型|
|float(x)|创建一个浮点型|
|complex(real)|创建一个复数|
|str(x)|将x对象转换成字符串|
|repr(x)|将x对象转换为表达式字符串|
|eval(str)|用来计算在字符串中的有效python表达式，并返回一个对象|
|tuple(s)|将s序列转换为一个元组|
|list(s)|将s序列转换为一个列表|
|set(s)|转换为可变集合|
|dict(d)|创建一个字典。d必须是一个序列(key,value)元组|
|frozenset(s)|转换为不可变集合|
|chr(x)|将一个整数转换为一个字符|
|unichr(x)|将一个整数转换为unicode字符|
|ord(x)|将一个字符转换为他的整数值|
|hex(x)|将一个整数转换为一个十六进制字符串|
|oct(x)|将一个整数转换为一个八进制字符串|