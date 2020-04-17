'use strict';

// ブロックスコープを作ることができる
{
const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');


console.log(tabLabels);

// querySelectorAllで取得したNodeList（複数の値）を取得するには forEach for-of
tabLabels.forEach( clickedLabel => {
  clickedLabel.addEventListener('click', e => {
    e.preventDefault(); // aタグの挙動を制限する

    tabLabels.forEach(label => {
      label.classList.remove('active');
    });
    
    clickedLabel.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
    });

  // dataset.idと表すことでdata-idを指す
  document.getElementById(clickedLabel.dataset.id).classList.add('active');

  })
});

}