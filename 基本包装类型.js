const str = 'pink'
console.log(str.length)
const num = 12
console.log(num.toFixed(2))
//JS底层做了一个包装, 把简单数据类型包装成了引用数据类型
//其实字符串，数值，布尔，等基本数据类型也都有专门的构造函数，这些我们称为包装类型   
const str1 = new String('pink')