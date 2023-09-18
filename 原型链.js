function Person() {

}

const ldh = new Person() 
console.log(ldh.__proto__ == Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Object.prototype)
console.log(Object.prototype.__proto__) // 到顶了 指向null

//只要是实例对象就有__proto__, __protp__指向构造函数的prototype对象
//由于prototype是也是一个实例对象, 它里面就也有__proto__属性

//原型链就是一个查找规则
//1. 当访问一个对象的属性时，先看当前实例上有无该属性方法，
//2. 如果没有就通过__proto__往上面找 
//3. 以此类推一直找到Object为止(null)
//4. __proto__对象原型的意义就在于为对象成员查找机制提供一个方向，或者一条路

console.log(ldh instanceof Person);
console.log(ldh instanceof Object);
console.log(Array instanceof Object);