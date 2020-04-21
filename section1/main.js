// console.log('test');

// 中身の型を確認できる
// console.log(typeof '123');

// const array = [1, 2, 3];
// console.log(array[3]);

// オブジェクトの書き方
// const member = {
//   // キーと値
//   'name': '本田',
//   'height': 170,
//   'hobby': 'サッカー'
// };
// console.log(member['name']);
// console.log(member.name);

// 連想配列の書き方
// const member_2 = {
//   '本田':{
//     'height':170,
//     'hobby':'サッカー'
//   },
//   'kagawa':{
//     'height':165,
//     'hobby':'サッカー'
//   }
// };
// console.log(member_2['本田']['height']);

// この書き方でも出来るが日本語では推奨されない
// console.log(member_2.kagawa.height); 

// 階層が深くなっても表現できる
const member_3 = {
  '1kumi':{
    '本田':{
      'height':170,
      'hobby':'サッカー'
    },
    'kagawa':{
      'height':165,
      'hobby':'サッカー'
    }
  },
  '2kumi':{

  }
};

// console.log(member_3['1kumi']['本田']['height']);

// 繰り返し
// const scores = [10, 20, 30];

// one of them リストを全部出したい時に使用
// for( score of scores) {
//   console.log(score);
// }

// リストを条件によって書き出したい時に使用
// for（初期値; 条件; 増減){}
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 引数なしの関数
// function test() {
//   console.log('test');
// }

// test();

// 引数ありの関数
// const comment = 'コメント';
// const comment_2 = 'コメント2';

// function getComment(string) {
//   console.log(string);
// }

// getComment(comment_2);

// 引数２つ、アウトプットあり
// function sumPrice(int1, int2) {
//   let int3 = int1 + int2;
//   return int3;
// }

// const x = sumPrice(1, 2);
// console.log(x);

const t = 'テストです';
// console.log(t.length);

// 文字列 string

// String.length　長さ
// String.indexOf() 検索（位置）
// String.slice()　取り出し
// String.substring() ●文字目から●文字だけを取り出す
// String.split() 分割
// String.concat()　連結
// String.trim() 両端から空白などを取り除く
// String.startsWith() 指定文字列で始まるか
// String.includes() 検索（含まれているか
// String.replace() 置き換え

// マップの書き方
const myMap = new Map();

myMap.set('id', 3);
myMap.set('name', '本田');

console.log(myMap);

// console.log(myMap.get('name'));

// 値を表示する
const valueList = myMap.values();
for ( value of valueList) {
  console.log(value);
}

// キーを表示する
const keyList = myMap.keys();
for ( key of keyList) {
  console.log(key);
}

const fruits = [
  'りんご', 'バナナ'
];

// console.log(fruits);
// 配列に追加する
fruits.push('みかん');

// console.log(fruits);

// コールバック関数
// fruits.forEach(function(input){
//   console.log(input);
// });

// 一般的な関数の作り方
// function getItem(){}

// アロー関数
// 名前あり
// const getItem = () => {console.log('アロー')};
// 名前あり　1行なら{}不要
// const getItem = () => console.log('アロー');
// getItem();

// 引数が１個なら()すら不要
const double = x => x * 2;
console.log(double(2));

// fruits.forEach(input => console.log(input));

// array.filter 条件でフィルタリングする
const scores = [10, 20, 30, 40];

// const newScores = scores.filter((value) =>{
//   return value > 30;
// });
const newScores = scores.filter(value => value > 30);

console.log(newScores);

// array.find 条件にあった一番最初の文字列を見つける
const members = ['本田', '香川', '長友'];

const member = members.find(value => value === '長友');

console.log(member);

// array.map 配列を元に新しい配列を作る
const userList = [10, 20, 30, 40];

// テンプレート文字列 `${}` バッククォート
// const userIdList = userList.map(value => {
//   return `user_${value}`;
// });
const userIdList = userList.map(value => `user_${value}`);

console.table(userIdList);

// Objectオブジェクト
// const test = new Object();
const test = {
  test1:10,
  test2:20,
  test3:30
};

console.log(test);
console.log(Object.values(test)); // 値だけ（stringオブジェクトやarrayオブジェクトと書き方が異なる

// for of で１つずつ書き出す
for(value of Object.values(test)){
  console.log(value);
}

// 郵便番号のチェック
const postalCode = '123-4567';

// オブジェクトの中に関数（メソッド）
const postal = {

  postalCode: '123-4567',

  // checkPostalCode(string){
  //   const replaced = string.replace('-', '');
  //   const length = replaced.length;

  //   if(length === 7){
  //     return true;
  //   }
  //   return false;
  // }

  checkPostalCode(){
    const replaced = this.postalCode.replace('-', '');
    const length = replaced.length;

    if(length === 7){
      return true;
    }
    return false;
  }
};

console.log(postal.postalCode);
// console.log(postal.checkPostalCode(pstalCode));

// thisを使っている場合
console.log(postal.checkPostalCode());

// メソッドチェーン
const person = {
  name:'本田',
  age:30,

  getName(){
    console.log(this.name);
    return this; // 戻り値がthis（オブジェクト自体を指す
  },
  getAge(){
    console.log(this.age);
    return this;
  }
};

// オブジェクト.メソッド.メソッド
person.getName().getAge();

