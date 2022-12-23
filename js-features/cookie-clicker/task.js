const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let count = 0;
let startTime = new Date();

cookie.onclick = function() {
    count++;
    clickerCounter.textContent = count;

    if (count % 2 !== 0) {
        cookie.width = 220;
    } else {
        cookie.width = 200;
    }

    let endTime = new Date();
    let speed = 1 / ((endTime - startTime) / 1000);
    
    clickerSpeed.textContent = speed.toFixed(2);
    
    startTime = endTime;
}