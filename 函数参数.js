//当不确定传递多少个实参的时候，可以使用动态参数    
//产品需求：写一个求和函数, 用户输入几个数就把这几个数求和
//使用动态参数
function getSum() {
    // arguments 动态参数， 只存在于函数里面    
    // 1. arguments 是伪数组，有下标但没有数组的方法比如push()
    console.log(arguments)
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

getSum(2,3)
getSum(2,3,4,5)