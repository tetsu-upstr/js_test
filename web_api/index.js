// async 非同期関数 awaitが使えるようになる
async function callApi() {
  // APIをたたく処理
  // fetchをするとpromiseオブジェクトが返ってくる
  const RESPONSE = await fetch('https://jsonplaceholder.typicode.com/users');
  const USERS = await RESPONSE.json();
  console.log(USERS);
};

callApi();


// 別の書き方 then
function callApi() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(RESPONSE) {
      return RESPONSE.json();
    })
    .then(function(USERS) {
      console.log(USERS);
    })
};

callApi();