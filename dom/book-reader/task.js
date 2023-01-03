const buttons = Array.from(document.querySelectorAll('.font-size'));

const book = document.querySelector(".book");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ( event ) => {
        for (let t = 0; t < buttons.length; t++) {
            buttons[t].classList.remove("font-size_active");
            event.preventDefault();
        }        
        
        buttons[i].classList.add("font-size_active");
        
        let activeSize = document.querySelector('.font-size_active');
        let activeSizeIndex = buttons.indexOf(activeSize);

        if (activeSizeIndex == 0) {
            book.classList.add("book_fs-small");
            book.classList.remove("book_fs-big");
        } else if (activeSizeIndex == 2) {
            book.classList.add("book_fs-big");
            book.classList.remove("book_fs-small")
        } else {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
        }
    });
}