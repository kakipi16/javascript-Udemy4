class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
	}

	shakeHands(person) {
		console.log(`${this.name} shake hands with ${person.name}.`);
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
	}
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

// bob.hello(tim);
// bob.introduce();
// bob.shakeHands(tim);
// bob.bye(tim);

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);
		//戻り値を設定するとチェーンメソッドにできる
		// Personから生成したインスタンスを返す記述になる。
		return this;
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
		return this;
	}

	shakeHands(person) {
		console.log(`${this.name} shake hands with ${person.name}.`);
		return this;
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
	}
}

const bob2 = new Person2('Bob', 23);
const tim2 = new Person2('Tim', 33);

// これがチェーンメソッド
bob2.hello(tim2)
	.introduce()
	.shakeHands(tim2)
	.bye(tim2);
