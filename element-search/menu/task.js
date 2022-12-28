const menuLink = document.querySelectorAll(".menu__link");
let arrMenuLink = Array.from(menuLink);

for (let i = 0; i < arrMenuLink.length; i++) {
    arrMenuLink[i].addEventListener('click', function(elem) {
        const menuItem = elem.target.closest('.menu__item');
        const menuSub = menuItem.querySelector('.menu_sub');

        if (menuSub) {            
            menuSub.classList.toggle("menu_active");
            elem.preventDefault();
            return false;            
        }
    });
}