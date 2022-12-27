const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
let sliderActive;


function showSlider() {
    sliderActive = document.querySelector('.slider__item_active');
}

sliderArrowNext.onclick = function() { 
    showSlider();
    sliderActive.classList.remove("slider__item_active");    
    for (let i = 0; i < sliderItem.length; i++) {
        if (i === (sliderItem.length - 1)) {
            sliderItem[0].classList.add("slider__item_active");
        } else {
            i++;                                
            sliderItem[i].classList.add("slider__item_active");           
        }                    
    } 
};

sliderArrowPrev.onclick = function() { 
    showSlider();
    sliderActive.classList.remove("slider__item_active");    
    for (let i = 0; i < sliderItem.length; i++) {
        if (i === 0) {
            sliderItem[sliderItem.length - 1].classList.add("slider__item_active");
        } else {
            i--;                                
            sliderItem[i].classList.add("slider__item_active");      
        }                    
    } 
};