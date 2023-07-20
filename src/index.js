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
// const name = "mochi";
// const age = 28;

// //従来
// const message1 = "私の名前は" + name + "です。" + age + "歳です。";
// console.log(message1);

// //テンプレートリテラル
// const message2 = `私の名前は${name}です。${age}歳でーーーす。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数の書き方
//
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

//アロー関数で書いてみる
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
