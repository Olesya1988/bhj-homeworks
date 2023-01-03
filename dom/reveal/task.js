const reveal = document.querySelectorAll('.reveal');

for (let i = 0; i < reveal.length; i++) {
    function isVisible(el) {
        let { top, bottom } = el.getBoundingClientRect();
    
        if (bottom > 0 && top < window.innerHeight) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }   
    }   
        
    setInterval(() => isVisible(reveal[i]), 1000);
}