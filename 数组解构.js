//数组结构是将数组的值快速批量赋值给一些列变量的简洁语法
const arr = [100, 60, 80] // 最大值，最小值，平均值
// const max = arr[0] //最大值
// const min = arr[1] //最小值
// const avg = arr[2] //平均值

// const[max, min, avg] = arr
const[max, min, avg] = [100, 60, 80]
console.log(max)
console.log(min)
console.log(avg)

//交换两个变量
let a = 1
let b = 2;
[b, a] = [a, b]
console.log(a, b)