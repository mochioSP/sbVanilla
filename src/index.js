/**
 * constとlet等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

//オブジェクトプロパティは変更可能
// const val4 = {
//   name: "mochi",
//   age: 28
// };
// val4.name = "japan";

//プロパティの追加もできる
// val4.adress = "america";
// console.log(val4);

//配列も変更ができ、追加も可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5)

/**
 * テンプレートリテラル
 */
const name = "mochi";
const age = 28;

//従来
const message1 = "私の名前は" + name + "です。" + age + "歳です。";
console.log(message1);

//テンプレートリテラル
const message2 = `私の名前は${name}です。${age}歳でーーーす。`;
console.log(message2);
