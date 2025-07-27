/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
      console.log('hello ' + this.name);
      return this;
  }
}

const bob = new Person('Bob', 23);
//解答
//OK
// setTimeout(bob.hello.bind(bob), 1000);

// setTimeout(bob.hello.call(bob), 1000);

//答え
//コールバック関数とthisを見よう
setTimeout(function() {
  bob.hello()
} , 1000);