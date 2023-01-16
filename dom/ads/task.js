// const phrases = Array.from(document.querySelectorAll('.rotator__case'));

// let speed = [];

// for (let i = 0; i < phrases.length; i++) {    
//     let color = phrases[i].dataset.color;
//     phrases[i].style.color = color;
//     speed[i] = phrases[i].dataset.speed;
// }

// function getRotate() {
//     activePhrase = document.querySelector('.rotator__case_active');
//     activePhraseIndex = phrases.indexOf(activePhrase);    
//     showPhrase(activePhraseIndex += 1);          
// }

// function showPhrase(n) {
//     let activePhrase = document.querySelector('.rotator__case_active');
//     let activePhraseIndex = phrases.indexOf(activePhrase);
//     phrases[activePhraseIndex].classList.remove('rotator__case_active');

//     if (n > (phrases.length - 1)) {
//         n = 0;
//     }
    
//     phrases[n].classList.add('rotator__case_active');
// }


// for (let i = 0; i < speed.length; i++) {
//     setInterval(() => getRotate(), speed[i]);
//     i++;
    
// }

const rotator = document.querySelector(".rotator").firstChild.nextSibling;

const changeRotator = function () {
  let active = document.querySelector(".rotator__case_active");
  active.classList.toggle("rotator__case_active");
  if (active.nextElementSibling === null) {
    settings = rotator.dataset;
    rotator.style.color = settings.color;
    rotator.classList.toggle("rotator__case_active");
  } else {
    settings = active.nextElementSibling.dataset;
    active.nextElementSibling.style.color = settings.color;
    active.nextElementSibling.classList.toggle("rotator__case_active");
  }
  return setTimeout(changeRotator, parseInt(settings.speed));
};
changeRotator();