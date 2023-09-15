//1. 把所有var声明的变量提升到 当前作用域的最前面
//2. 只提升声明， 不提升赋值
//3. let/const 声明的变量不存在变量提升
//4. 只提升在当前的作用域下
//5. 实际开放中不要使用var
console.log(num+ '件')
var num = 10;
console.log(num+ '件')

function fn() {
    console.log(num)
    var num = 10;
}

fn();
