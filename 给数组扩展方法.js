//自己定义数组扩展方法 求和和最大值
//1. 我们定义的这个方法，任何一个数组实例对象都可以使用
//2.自定义方法写到 数组.prototype上面
Array.prototype.max = function() {
    return Math.max(...this) // 展开运算符
}

const arr = [1,2,3,4,5]
const arr1 = new Array(1,2,3,4,5,6)

console.log(arr.max())
console.log(arr1.max())

Array.prototype.sum = function() {
    return this.reduce( (prev, item) => prev + item, 0)
}

console.log([1,2,3].sum())
console.log([11,21,31].sum())