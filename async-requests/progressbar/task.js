const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };    
    
    const formData = new FormData(form);
    xhr.send(formData);

    event.preventDefault();
});