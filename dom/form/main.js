// const form = document.getElementById('test');
// console.log(form);

// document.formsでも要素を取得できる
// const forms = document.forms;
// console.log(forms);

// forms.(form id)で<form>の要素を取得できる
// const formTest2 = document.forms.form_test2;
// console.log(formTest2);

// form.（form id）.（input name）で要素を取得できる
const formTestYourName = document.forms.form_test1.your_name;
console.log(formTestYourName);

// form.（form id）.（input name）.valueで値を取得できる
const formTestYourNameValue = document.forms.form_test1.your_name.value;
console.log(formTestYourNameValue);

// 入力した文字を別の場所に表示させる
formTestYourName.addEventListener('input', () => {
  let yourNameValue = document.getElementById('your_name_value');
  yourNameValue.textContent = formTestYourName.value;
});

// const input = createElement('input');
// input.value = 'ああ';
// input.name = 'your_name';
// input.type = 'text';

const preview = document.forms.form_test2.preview;

document.forms.form_test2.image_file.addEventListener('change', (e) => {
  console.log(e.target.files[0]);
  const uploadFile = e.target.files[0];

  // FileReader
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    preview.src = reader.result; // Base64（アドレス）
    console.log(preview.src);
  });
  reader.readAsDataURL(uploadFile);
});