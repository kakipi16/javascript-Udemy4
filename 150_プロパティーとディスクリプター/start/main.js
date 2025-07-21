//開発者がこの仕様に気が付きにくいので
//これでエラーにできる。
"use strict"

//オブジェクトリテラルで定義されているとすべての値がtrueとなる
const obj = {prop: 0};

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");

console.log(descriptor);



const obj2 = {};

Object.defineProperty(obj2, "prop", {
    configurable:true,
    // valueなどを定義すると設定値がすべてfalseとなる。
    value: 0,
    writable: true
})
// Object.defineProperty(obj2, "prop", {
//     //エラーになる
//     enumerable: true
// })
//configurable:falseだとエラーになる
delete obj2.prop;

obj2.prop = 1;
console.log(obj2.prop);

const descriptor2 = Object.getOwnPropertyDescriptor(obj2, "prop");

console.log(descriptor2);