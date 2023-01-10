const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const tasksAdd = document.querySelector('.tasks__add');
const task = document.querySelectorAll('.task');

tasksAdd.onclick = function() {
    if (input.value.trim()) {
        tasksList.insertAdjacentHTML('beforeend', `
        <div class="task">
        <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>
        </div>`);
        
        input.value = '';
    }    

    const taskRemove = tasksList.lastElementChild.querySelector('.task__remove');

    taskRemove.onclick = function() {
            let div = taskRemove.closest('.task');
            div.remove();
            return false;
        };    
    
    return false;
};
