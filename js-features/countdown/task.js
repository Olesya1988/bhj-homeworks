let timer = document.getElementById("timer");

function setCountdown() {
    const countdown = () => {
        timer.textContent -= 1;
        if (timer.textContent < 0) {
            alert('Вы победили в конкурсе!');
            clearInterval(timerId);    
        }
    }
    
    const timerId = setInterval(countdown, 1000);
}

setCountdown();

// Повышенный уровень сложности #1 и #2

const hours = document.getElementById("timer__hours");
const minutes = document.getElementById("timer__minutes");
const seconds = document.getElementById("timer__seconds");


function deadlineCountdown() {
    const countdown2 = () => {
        seconds.textContent -= 1;

        if (hours.textContent == 0 && minutes.textContent == 0 && seconds.textContent == 0) {
            location.assign("https://www.mozilla.org/firefox/download/thanks/");        
            clearInterval(timerId2);
        }

        if (seconds.textContent.length < 2) {
            seconds.textContent = '0' + seconds.textContent;
        }
        if (minutes.textContent.length < 2) {
            minutes.textContent = '0' + minutes.textContent;
        }
        
        if (hours.textContent.length < 2) {
            hours.textContent = '0' + hours.textContent;
        }    

        if (seconds.textContent < 0) {
            minutes.textContent -= 1;
            seconds.textContent = 59;
        }

        if (minutes.textContent < 0) {
            hours.textContent -= 1;
            minutes.textContent = 59;
        }
    }
    
    const timerId2 = setInterval(countdown2, 1000);
}

deadlineCountdown();