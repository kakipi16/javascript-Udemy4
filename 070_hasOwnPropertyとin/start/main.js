function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
// hasOwnPropertyは自分自身のオブジェクトのプロパティが存在するかを確認する
const result = bob.hasOwnProperty("hello")
//true
console.log(result)
//inとは後に記入したオブジェクトのプロパティ、またはオブジェクトが保持しているPrototypeに文字列が含まれているかを確認する。
//実装していないものはfalseになる。
//true
console.log("name" in bob);
//true
console.log("hello" in bob);
//true
console.log("hasOwnProperty" in bob);
