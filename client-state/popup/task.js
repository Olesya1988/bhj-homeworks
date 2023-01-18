const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close')

const pairs = document.cookie.split('; ')
const cookie = pairs.find((i) => i.startsWith('active' + '='));

if (!cookie) {
    modal.classList.add('modal_active');
} else {
    modal.classList.remove('modal_active');
};

modalClose.addEventListener('click', (event) => {
    modal.classList.remove('modal_active');
    document.cookie = 'active=no';
    event.preventDefault();
});