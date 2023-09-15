function outer() {
    let a = 1;
    function increase() {
        a++;
    }
    function print() {
        console.log(a);
    }
    return [increase, print]
}

let funs = outer();
let increase = funs[0];
let print = funs[1];

print(); // 1
increase();
increase();
print(); //3
