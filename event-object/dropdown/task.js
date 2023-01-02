const dropdownValue = document.querySelector(".dropdown__value");
const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropdownValue.addEventListener('click', function(elem) {
    const dropdown = elem.target.closest('.dropdown');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    if (dropdownList) {            
        dropdownList.classList.toggle("dropdown__list_active");
        elem.preventDefault();
        return false;            
    }
})

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', function(e) {
        dropdownValue.textContent = dropdownItem[i].textContent;
        document.querySelector('.dropdown__list_active').classList.remove("dropdown__list_active");
        e.preventDefault();        
        })
}