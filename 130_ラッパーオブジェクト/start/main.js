const a = new String("hello")
const a1 = "hello".toUpperCase();

//文字を配列で１文字づつ内包している。
// 出力値 String{"hello"}
console.log(a);
//出力値HELLO
console.log(a1);
//大文字に変えるビルトインオブジェクト
//HELLO
console.log(a.toUpperCase());

const b = new Number(100);

const b1 = 100;

//出力値 {100}
console.log(b)
//出力値　1e+2 10の２乗の意味
console.log(b.toExponential());
//出力値1e+2
console.log(b1.toExponential());

