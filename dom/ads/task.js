const phrases = Array.from(document.querySelectorAll('.rotator__case'));

function getRotate() {
    activePhrase = document.querySelector('.rotator__case_active');
    activePhraseIndex = phrases.indexOf(activePhrase);    
    showPhrase(activePhraseIndex += 1);       
}

function showPhrase(n) {
    let activePhrase = document.querySelector('.rotator__case_active');
    let activePhraseIndex = phrases.indexOf(activePhrase);
    phrases[activePhraseIndex].classList.remove('rotator__case_active');

    if (n > (phrases.length - 1)) {
        n = 0;
    }
    
    phrases[n].classList.add('rotator__case_active');
}

setInterval(() => getRotate(), 1000);