// console.log('test');

// 中身の型を確認できる
// console.log(typeof '123');

// const array = [1, 2, 3];
// console.log(array[3]);

// オブジェクトの書き方
const member = {
  // キーと値
  'name': '本田',
  'height': 170,
  'hobby': 'サッカー'
};
// console.log(member['name']);
// console.log(member.name);

// 連想配列の書き方
const member_2 = {
  '本田':{
    'height':170,
    'hobby':'サッカー'
  },
  'kagawa':{
    'height':165,
    'hobby':'サッカー'
  }
};
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