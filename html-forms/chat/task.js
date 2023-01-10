

const chatWidgetSide = document.querySelector('.chat-widget__side');

chatWidgetSide.addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
})

const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');

chatWidgetInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        let textClient = chatWidgetInput.value;
        let textSupportArr = [
            'У вас вся спина белая',
            'К сожалению, сейчас все операторы заняты. Вам ответят через 2 года',
            'Хамите.',
            'А кому сейчас легко?',
            'Подумаешь!',
            'Не волнуйтесь! Выпейте-ка лучше чаю.',
            'Это всё, что Вы хотели сказать?',
            'Мне вам больше сказать нечего.',
            'У вас есть еще вопросы?',
            'Ого!',
        ]

        let index = Math.floor(Math.random() * 10); 

        let hours = new Date().getHours();

        if (hours < 10) {
            hours = '0' + hours;
        }
        
        let minutes = new Date().getMinutes();
        
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (chatWidgetInput.value) {
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
            ${textClient}
            </div>
            </div>
            `;

            messages.innerHTML += `
            <div class="message">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
            ${textSupportArr[index]}
            </div>
            </div>
            `;
        }
        
    chatWidgetInput.value = '';
    }    
    });