function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 階層が浅いものから呼び出される。
Person.prototype.hello = function() {
  console.log('Person: hello ' + this.name);
}

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
bob.hello();

function Person1(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log('OwnProperty: hello ' + this.name);
  }
}
//階層が浅いものから呼び出される。
// Person1.prototype.hello = function() {
//   console.log('Person: hello ' + this.name);
// }

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob1 = new Person1('Bob', 18);
bob1.hello();

const result = bob1.hasOwnProperty('name')
//true
console.log(result);