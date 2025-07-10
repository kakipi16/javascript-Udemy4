function F(a, b) {
    this.a = a;
    this.b = b;
    // const result = new Object();
    // result.a = 1;
    // return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1,2);
//true
console.log(instance instanceof F)
//false
console.log(instance.__proto__ === Object.prototype)

function V(a, b) {
    this.a = a;
    this.b = b;
    const result = new Object();
    result.a = 1;
    return {a: 1};
}

F.prototype.c = function() {}

const instance2 = new V(1,2);
// false
console.log(instance2 instanceof V)
//true
console.log(instance2.__proto__ === Object.prototype)


//オブジェクト指向だとよく使うそう
function fn(arg) {
    if(arg instanceof Array) {
        arg.push("value")
    } else {
        arg["key"] = "value";
    }
}

fn([])