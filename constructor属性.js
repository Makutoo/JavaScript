function Star() {

}

// constructor属性， 该属性指向原型对象的构造函数
const ldh = new Star()
console.log(Star.prototype.constructor === Star)

// Star.prototype.sing = function() {
//     console.log("唱歌")
// }

// Star.prototype.dance = function(){ 
//     console.log("跳舞")
// }

Star.prototype = { 
    // 重新指回这个构造原型对象的构造函数
    constructor: Star,
    sing: function() {
        console.log("唱歌")
    },
    dance: function() {
        console.log("跳舞")
    }
}




