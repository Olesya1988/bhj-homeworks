const modalMain = document.getElementById("modal_main");

function modalActive() {
    modalMain.className = "modal modal_active";
}

setTimeout(modalActive, 1000);

const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.getElementsByClassName("show-success");
let arrSuccess = Array.from(showSuccess);

for (let i = 0; i < arrSuccess.length; i++) {
    showSuccess[i].onclick = function() {
        modalSuccess.className = "modal modal_active";
        modalMain.className = "modal";
    }
}

const modalClose = document.querySelectorAll(".modal__close");
let arrClose = Array.from(modalClose);

for (let i = 0; i < arrClose.length; i++) {
    arrClose[i].onclick = function() {
        modalMain.className = "modal";
        modalSuccess.className = "modal";
    }
}