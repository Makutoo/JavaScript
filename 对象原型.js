//对象都会有一个属性 __proto__ 指向构造函数的protptype 原型对象
//之所以我们对象可以使用构造函数protptype原型对象的属性和方法，就是因为对象__proto__原型的存在
function Star() {}
const ldh = new Star()

//对象原型__proto__ 指向构造函数的原型对象
console.log(ldh.__proto__ === Star.prototype)
console.log(ldh.__proto__.constructor === Star)
console.log(ldh.constructor === Star)
console.log(Star.prototype.constructor === Star)