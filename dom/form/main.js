// const form = document.getElementById('test');
// console.log(form);

// document.formsでも要素を取得できる
// const forms = document.forms;
// console.log(forms);

// forms.(form id)で<form>の要素を取得できる
// const formTest2 = document.forms.form_test2;
// console.log(formTest2);

// form.（form id）.（input name）で要素を取得できる
const formTestYourname = document.forms.form_test1.your_name;
console.log(formTestYourname);

// form.（form id）.（input name）.valueで値を取得できる
const formTestYournameValue = document.forms.form_test1.your_name.value;
console.log(formTestYournameValue);