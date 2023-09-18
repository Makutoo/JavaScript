//物理意义：避免全局污染


//普通立即执行函数
(function hello() {
    console.log('Hello World')
})()

//匿名立即执行函数
(function () {
    console.log('Hello World')
})()

//箭头立即执行函数
(() => console.log('Hello World'))()