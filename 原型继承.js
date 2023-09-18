// // 女人 构造函数
// function Woman() {
//     this.eyes = 2
//     this.head = 1
// }

// // 男人 构造函数
// function Man() {
//     this.eyes = 2
//     this.head = 1
// }

function Person() {
    this.eyes = 2;
    this.head = 1;
}

function Woman() {

}
function Man() {

}

//通过原型继承Person
Woman.prototype = new Person()
Man.prototype = new Person()

//直接赋值，丢失constructor的指向
console.log(Woman.prototype.constructor === Woman) 

//指回原来的构造函数
Man.prototype.constructor = Man
Woman.prototype.constructor = Woman
console.log(Woman.prototype.constructor === Woman) 

//给Woman添加一个方法 
Woman.prototype.baby = function() {
    console.log('宝贝')
}

const bob = new Man()
const alice = new Woman()
console.log(alice.eyes)
console.log(alice.head)
alice.baby() //Woman 有baby这个方法

console.log(bob.eyes)
console.log(bob.head)
console.log(bob.baby === undefined) //Man 没有baby这个方法



