//创建对象的三种方式
const obj1 = {
    name: "makutoo"
}
const obj2 = new Object({name: "makutoo"})

//使用构造函数创建对象

//抽取封装构造函数
//构造函数的命名以大写字母开头，它们只能由“new” 操作符来执行
function Pig(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const Peppa = new Pig('佩奇', 6, '女')
const George = new Pig('乔治', 3, '男')
const Mum = new Pig('猪妈妈', 30, '女')
const Dad = new Pig('猪爸爸', 32, '男')

console.log(Peppa)

// 构造函数的new关键字做什么？
//1. 创建新对象
//2. 构造函数this指向新对象
//3. 执行构造函数代码，修改this，添加新属性
//4. 返回新对象 


function Dog(name) {
    this.name = name
}

//静态成员：构造函数上的属性和方法称为静态成员
Dog.eyes = 2
Dog.sayHi = () => {
    console.log("汪汪")
}

console.log(Dog.eyes)
Dog.sayHi()