const slides = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

sliderArrowNext.onclick = function() {
    slideIndex = slides.findIndex(value => value === document.querySelector('.slider__item_active'));
    showSlides(slideIndex += 1);         
};

sliderArrowPrev.onclick = function() {   
    slideIndex = slides.findIndex(value => value === document.querySelector('.slider__item_active'));
    showSlides(slideIndex -= 1);
};

function showSlides(n) {
    let slideIndex = slides.findIndex(value => value === document.querySelector('.slider__item_active'));
    slides[slideIndex].classList.remove('slider__item_active');    

    if (n < 0) {
        n = (slides.length - 1);
    }

    if (n > (slides.length - 1)) {
        n = 0;
    }

    slides[n].classList.add('slider__item_active');
}