function Person1(name, age) {
	this.name = name;
	this.age = age;
}

//コンストラクター関数での記述方法
Person1.hello = function() {
		console.log("hello")
		// Person2オブジェクト自体が生成されてしまう
		// console.log("hello" + this)
}

Person1.hello();

//なんらかの処理を間に挟む際にgetter/setterは使用される
Object.defineProperty(Person1.prototype, "name", {
	get: function() {
		//こうするとgetが呼ばれたら必ずhelloが呼ばれる
		console.log('hello')
		return this. _name;
		// この場合の出力値はhello
		// return 'hello';
	},
	set: function(val) {
		// 引数のvalに渡ってきてthis.nameに格納される
		this. _name = val;
	}
});

const p1 = new Person1('Bob', 23);

// この場合の出力値はTom
// p1.name = 'Tom'
// console.log(p1.name)

//ES6
class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get name() {
		console.log('hello')
		return this. _name;
	}

	set name(val) {
		this. _name = val;
	}
	//staticクラス内で使用できる静的なメソットを定義する場合のキーワード
	static hello() {
		console.log("hello")
		// Person2オブジェクト自体が生成されてしまう
		console.log("hello" + this)
	}
}
//スタティックメソッド
//インスタンスを行わずに生成できる
//インスタンスを行っていないのでオブジェクト２は生成されていない
Person2.hello()