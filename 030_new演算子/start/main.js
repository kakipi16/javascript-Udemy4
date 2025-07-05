// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     return {};
// }
// const instance = new F(1, 2);
// //{}が出力される。
// console.log(instance);

// function N(a, b) {
//     this.a = a;
//     this.b = b;
//     // returnがない場合も同様
//     return 1;
// }

// const instance2 = new N(1, 2);
// //｛a:1, b:2}が出力される。
// console.log(instance2);

// function M(a, b) {
//     this.a = a;
//     this.b = b;
//     // return{}がついている場合はprototypeは格納されない。
//     // return {};
// }

// M.prototype.c = function() {
// }

// const instance3 = new M(1, 2);
// //Prototypeのcメソッドが格納されている。
// console.log(instance3);

// function O(a, b) {
//     this.a = a;
//     this.b = b;
//     return {};
// }

// O.prototype.c = function() {
// }
// function newOpe(C, ...args) {
//     console.log(args)
// }
// const instance4 = newOpe(F, 1, 2);

function P(a, b) {
    this.a = a;
    this.b = b;
    return {};
}

P.prototype.c = function() {
}
function newOpe(C, ...args) {
    //このメソッドはP{}に__proto__にからの引数で設定したオブジェクトの参照をコピーして空のオブジェクトを設定するもの
    const _this = Object.create(P.prototype);
    const result = C.apply(_this, args)
    console.log(typeof result)
    if(typeof result === "object" && result !== null) {
        return result;
    }
    return _this;
}
const instance5 = newOpe(P, 1, 2);
console.log(instance5)