// DOM
const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

async function getUsers() {
  // データのやりとり
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users;
}

async function listUsers() {
  const users = await getUsers();
  
  // DOM操作
  users.forEach(addList);

  // for (let i = 0; i < users.length; i++) {
  //   const user = users[i];
  //   const list = document.createElement('li');
  //   list.innerText = user.name;
  //   lists.appendChild(list);
  // }
}

function addList(user) {
  const list = document.createElement('li');
  list.innerText = user.name;
  lists.appendChild(list);
}

window.addEventListener('load', listUsers);
button.addEventListener('click', listUsers);