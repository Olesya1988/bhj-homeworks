const slides = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
let activeSlide = document.querySelector('.slider__item_active');

let slideIndex = slides.findIndex(value => value === activeSlide);

sliderArrowNext.onclick = function() {
    showSlides(slideIndex += 1);    
};

sliderArrowPrev.onclick = function() {   
    showSlides(slideIndex -= 1);
};

function showSlides(n) {

    if (n < 0) {
        n = (slides.length - 1);
    }

    if (n > (slides.length - 1)) {
        n = 0;
    }

    slides[slideIndex].classList.remove('slider__item_active');
    slides[slideIndex].classList.add('slider__item_active');
}