const s = Symbol("hello");
const s2 = Symbol("hello");
//false
console.log(s === s2)
//symbol
console.log(typeof s)

const str = new String("Tom");
console.log(str);

//Symbolを定義していないとES5で定義していてES6にバージョンアップした際に競合を起こしてエラーになってしまう場合ある。
String.prototype.iterator = function() {
}
//[s]と[s2]は異なるものと定義される。
String.prototype[s] = function() {
    return "hello" + this;
}
const tom = "Tom"
console.log(tom[s]())
//ビルトインオブジェクトの拡張は予期せぬエラーに繋がり兼ねない
String.prototype[s2] = function() {

}
