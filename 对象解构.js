// 对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法
const obj1 = {
    uname: 'pink',
    age: 18
}

//解构语法
const { uname, age } = obj1 // 等价于：const uname = obj.uname; const age = obj.age
console.log(uname)
console.log(age)

// 对象解构的变量名，可以重新改命
const {uname: username, age: Age} = obj1
console.log(username)
console.log(Age)


//数组对象的解构
const pig = [
    {
        uname: '佩奇',
        age: 19        
    }
]
const[{ uname : pigName, age : pigAge}] = pig
console.log(pigName)
console.log(pigAge)

//多级对象解构
const Pig = {
    name: '佩奇',
    family: {
        monther: '猪妈妈',
        father: '猪爸爸',
        sister: '乔治'
    },
    age: 6
}

const {name: PigUserName, family: {monther, father, sister}, age: PigAge} = Pig
console.log(PigUserName)
console.log(monther)
console.log(father)
console.log(sister)
console.log(PigAge)