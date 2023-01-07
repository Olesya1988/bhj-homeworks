const subMenu = Array.from(document.querySelectorAll('.interests_active'));
const mainCheckbox = [];
const subCheckbox = [];

for (let i = 0; i < subMenu.length; i++) {      
    mainCheckbox.push(subMenu[i].previousElementSibling.querySelector('.interest__check'));
    subCheckbox.push(subMenu[i].querySelectorAll('.interest__check'));    

    for (let i = 0; i < subCheckbox.length; i++) {
        for (let j = 0; j < subCheckbox[i].length; j++) {
            mainCheckbox[i].addEventListener('change', function() {
                if (mainCheckbox[i].checked) {
                    subCheckbox[i][j].checked = true;
                }
                if (!mainCheckbox[i].checked) {
                    subCheckbox[i][j].checked = false;
                }
            });
        }
    }
}