let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {    
        let responseObject = JSON.parse(xhr.responseText);   
        
        pollTitle.textContent = responseObject.data.title;      
        
        for (let key in responseObject.data.answers) {
            let answer = responseObject.data.answers[key];
            
            pollAnswers.insertAdjacentHTML("afterbegin", `
            <button class="poll__answer">
            ${answer}
            </button>
            `
            );
        }

        const answerArr = document.querySelectorAll('.poll__answer');

        for (let i = 0; i < answerArr.length; i++) {
            answerArr[i].onclick =  function() {
                alert('Спасибо, ваш голос засчитан!');
            }
        }
    };
};