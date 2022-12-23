let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let hole = document.querySelectorAll(".hole");
let deadCount = 0;
let lostCount = 0;

for (let i = 0; i < hole.length; i++) {   
    hole[i].addEventListener('click', function() {
        if (hole[i].classList.contains( 'hole_has-mole' )) {
            deadCount++;            
            dead.textContent = deadCount;
        } else {
            lostCount++;            
            lost.textContent = lostCount;
        }
        if (lost.textContent === '5') {
            alert('GAME OVER...');
            lostCount = 0;
            deadCount = 0;
            lost.textContent = 0;
            dead.textContent = 0;
        } else if (dead.textContent === '10') {
            alert('WIN!');
            lostCount = 0;
            deadCount = 0;
            lost.textContent = 0;
            dead.textContent = 0;
        }
    });
}