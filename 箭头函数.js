//目的主要是更简单的函数写法, 替代函数表达式
//使用场景：箭头函数更适用于那些本来需要匿名函数的地方

//普通函数
const fn1 = function fn(x) {
    console.log(x)
}
fn1(123)

//箭头函数
const fn2 = (x) => {
    console.log(x)
}
fn2(345)


// 1. 只有一个形参的时候，可以省略小括号
const fn3 = x => {
    console.log(x)
}
fn3(345)

// 2. 只有一行代码的时候，可以省略大括号
const fn4 = x => console.log(x)
fn4(567)

// 3. 如果只有一行代码且有返回值，可以连return也省略掉
const fn5 = x => x + x
console.log(fn5(3))

// 4. 箭头函数可以之间返回一个对象, 但是需要小括号包起来，因为对象的大括号和function大括号冲突
const fn6 = (uname) => ({ name: uname })
console.log(fn6("刘德华"))


// 5. 利用箭头函数求和
const getSum = (...arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(getSum(2,3,4,5,6))



