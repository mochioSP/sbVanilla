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
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// //アロー関数で書いてみる
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "yamada",
//   age: "33"
// };

// const message1 = `私は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `私は${name}です。年齢は${age}です。`;
// console.log(message2);

//分割代入は配列でも使える
// const myProfile = ["tanaka", 50];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数について
 */
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは${name}さん！`);
// sayHello('nishino');

/**
 * スプレッド構文...
 */
//配列の展開
//const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
//const nameArr = ["田中", "山田", "森"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}さんです。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name, i) => console.log(`${i + 1}番目は${name}さんです。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "森") {
//     return name;
//   } else {
//     return `${name}さん。`;
//   }
// });
// console.log(newNameArr);

/**
 * 参考演算子について
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100をこえています。。。" : "許容範囲内ですん";
// };
// console.log(checkSum(50, 30));

/**
 * 論理演算子の本当の意味を知ろう
 */
//||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

//&&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
