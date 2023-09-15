//1. 函数在声明之前就可以被调用
//2. 会把所有函数声明提升到当前作用域的最前面

fn()
function fn() {
    console.log('函数提升')
}

//3. 只提升函数声明，不提升函数调用
//4. 函数表达式无法提升函数
fun()

var fun = function() { //函数赋值
    console.log('函数表达式')
}

