// import { textArr } from "../js/data.js";


window.onload = function () {
  let desc = document.querySelector('.contents .desc'); // p 태그를 가져오기
  const descText = document.querySelector('.contents .desc-input');
  const textArr = ['<div>', '<span>', '<strong>', '<section>', '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<ul>', '<li>', '<ol>', '<li>', '<p>', '<input>', '<figure>', '<table>', '<th>', '<td>', '<tr>', '<button>', '<header>', '<main>', '<footer>',];


  // textArr 배열 랜덤으로 가져오기
  function name(textArr) {
    return textArr[Math.floor(Math.random() * textArr.length)];
  }
  let random = name(textArr);
  console.log(random);


  // 랜덤으로 가져온 값을 한 글자 단위로 나눠서 가져오기
  function arrayStringSplit() {
    for (let i = 0; i < textArr.length; i++) {
      let arrayText = random.split('');
      return arrayText;
    }
  }
  let result = arrayStringSplit();


  // 나눠서 가져온 배열 <span> 태그에 한 글자씩 넣기
  for (let i = 0; i < result.length; i++) {
    let tagElem = document.createElement('span');
    tagElem.textContent = result[i];
    desc.appendChild(tagElem);
    // console.log(tagElem); // 현재 태그들
  }


  // 현재 있는 span 태그 가져오기
  function typing(random) {
    let descTxt = document.querySelectorAll('.contents .desc span');

    let elementTag = ''
    for (let i = 0; i < descTxt.length; i++) {
      elementTag = elementTag + descTxt[i].innerText;
      descTxt[i].classList.remove('on');


      if (elementTag === descText.value) {
        // 스크립트에서 스타일 넣어줄 때 쓰는 코드
        // descTxt[i].style.backgroundColor = '#000';
        // descTxt[i].style.color = '#fff';

        descTxt[i].classList.add('on');

        if (window.event.keyCode == 13) {
          if (desc.outerText === descText.value) {
            
            let arrayRandom = name(textArr).split('');
            for (let i = 0; i < arrayRandom.length; i++) {
              let tag = document.createElement('span');
              desc.appendChild(tag);
              tag.textContent = arrayRandom[i];
            }

            for (let i = 0; i < descTxt.length; i++) {
              descTxt[i].remove();
            }

            descText.value = '';
          }
        }

      }
    }
  }
  descText.addEventListener('keyup', typing);
};