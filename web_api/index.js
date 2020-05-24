// async 非同期関数 awaitが使えるようになる
async function callApi() {
  // APIをたたく処理
  // fetchをするとpromiseオブジェクトが返ってくる
  const RESPONSE = await fetch('https://jsonplaceholder.typicode.com/users');
  const USERS = await RESPONSE.json();
  console.log(USERS);
};

callApi();