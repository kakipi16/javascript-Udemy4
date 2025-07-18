class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log('hello ' + this.name);
  }
}


//クラスの継承はextendsを使う
class Japanese extends Person {
  constructor(name, age, gender) {
    // constructorの継承はsuperを使う
    super(name, age);
    this.gender = gender;
  }
  hello() {
    console.log('Konnichiwa ' + this.name);
  }
  bye() {
    console.log('Sayonara ' + this.name);
  }

}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro)
taro.bye()