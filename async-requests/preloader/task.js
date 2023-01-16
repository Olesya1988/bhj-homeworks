let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

const items = document.getElementById("items");
const loader = document.querySelector(".loader");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {        
        loader.classList.remove('loader_active');

        let responseObject = JSON.parse(xhr.responseText);
        
        for (let key in responseObject.response.Valute) {
            let charCode = responseObject.response.Valute[key].CharCode;
            let value = responseObject.response.Valute[key].Value;
            items.insertAdjacentHTML("afterbegin", `
            <div class="item">
                <div class="item__code">
                    ${charCode}
                </div>
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
                </div>
            `
            );
        }
    };
};