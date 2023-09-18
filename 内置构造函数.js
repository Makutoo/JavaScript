//学习三个常有的静态方法，静态方法就是只有构造函数Object可以调用
const user = new Object({name: '小明', age: 15})

//Object.keys 静态方法获取对象中所有的属性（键）
const keys = Object.keys(user)
console.log(keys)
const values = Object.values(user)
console.log(values)

//Object.assign 静态方法用与拷贝对象
const user1 = {}
Object.assign(user1, user)
console.log(user1)