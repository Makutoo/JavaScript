//产品需求：写一个求和函数，不管用户传入几个实参，都要把和求出来
//剩余参数：

function getSum(...arr) {
    console.log(arr)
}

getSum(2,3,4)
getSum(1,2,3,4,5,8)

//如果用户至少传两个参数

function getSum2(a, b, ...arr) {
    console.log(`第一个参数: ${a}`);
    console.log(`第二个参数: ${b}`);
    console.log(`其他参数: ${arr}`);
}

getSum2(1,2,3,3,3)