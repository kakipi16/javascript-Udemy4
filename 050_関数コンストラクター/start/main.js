new Function('a','b', 'return a + b');
//上記の関数コンストラクターと同義
function fn(a, b) {
    return a + b;
}

const fn1 = new Function('a','b', 'return a + b');
//上記の関数コンストラクターと同義
const result = fn1(1, 2);
console.log(result)

function fn2(a, b) {
    return a + b;
}

//true
console.log(fn2 instanceof Function);

let d = 0;
//このコンストラクターはグローバルスコープになる。
function fn4() {
    let d = 1;
    const fn3 = new Function('a','b', 'return a * b * d');
    return fn3;
}

const f = fn4();
const result2 = f(1, 2);
//0
console.log(result2)


const obj = new function() {
    this.a = 0;
};
//関数からインスタンス化されたオブジェクトではないので記述方法が違う
const fn5 = new Function('return;');
//こっちが正解
const fn6 = new Function('this.a = 0:');
console.log(obj, fn5);