function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

function Japanese(name, age, gender) {
  Person.call(this, name, age);
  //Japaneseのみのプロパティも追加することができる。
  this.gender = gender;
}
//これがプロトタイプ継承
Japanese.prototype = Object.create(Person.prototype);
//プロトタイプもこのような形で継承可能
Japanese.prototype.hello = function() {
  console.log('Konnichiwa ' + this.name);
}
Japanese.prototype.bye = function() {
  console.log('Sayounara ' + this.name);
}

const taro = new Japanese("Taro", 23, 'Male');
//出力結果
// Japanese{name: Taro, age:23}
console.log(taro);
//出力結果
//Konnichiwa Taro
taro.hello();
taro.bye();