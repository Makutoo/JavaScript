function Star(uname, age) {
    this.uname = uname
    this.age = age
    this.sign = () => {
        console.log('唱歌')
    }
}

//前面我们学过的构造函数方法很好用，但是存在内存浪费问题
const ldh = new Star('刘德华', 55)
const zxy = new Star('张学友', 56)

console.log(ldh.sign === zxy.sign)
//我们希望所有的对象使用同一个函数，这样就比较节省内存，我们要怎么做呢？

//原型
//1. 构造函数通过原型分配的函数是所有对象所共享的
//2. JavaScript规定，每一个构造函数都有一个prototype属性，指向另一个对象，所以我们也称为原型对象

Star.prototype

//3.这个原型对象可以挂载函数，对象实例化不会多次创建函数，节省内存
//4.我们可以吧那些不变的方法，直接定义到prototype对象上，这样所有对象的实例就可以共享这些方法

function myStar(uname, age) {
    this.uname = uname
    this.age = age
    // this.sign = () => {
    //     console.log('唱歌')
    // }
}

myStar.prototype.sing = () => { //定义到prototype对象上
    console.log('唱歌')
}

const liudehua = new myStar('刘德华', 55)
const zhangxueyou = new myStar('张学友', 56)
console.log(liudehua.sing == zhangxueyou.sing)