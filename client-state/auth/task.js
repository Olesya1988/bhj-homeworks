const form = document.getElementById('signin__form');
const inputFields = Array.from(document.querySelectorAll('.control'));
const userId = document.getElementById('user_id');
const signin = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const button = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let responseText = JSON.parse(xhr.responseText);

            if (responseText.success === true) {
                inputFields.value = '';
                localStorage.setItem('id', JSON.stringify(responseText.user_id));
                let savedId = localStorage.getItem('id');
                userId.textContent = savedId;
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');                
            } else {
                alert('Неверный логин/пароль');               
            };
        };
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    
    const formData = new FormData(form);
    xhr.send(formData);

    event.preventDefault();
});

window.addEventListener('load', () => {        
    userId.textContent = localStorage.getItem('id');        
    welcome.classList.add('welcome_active');
});