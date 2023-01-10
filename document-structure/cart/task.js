const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const cart = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));

plus.forEach((el) => {
    el.addEventListener('click', () => {
        const value = el.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        let amount = +value.textContent;
        amount += 1; 
        value.textContent = amount;
    });
});

minus.forEach((el) => {
    el.addEventListener('click', () => {
        const value = el.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        let amount = +value.textContent;
        if (amount === 1) {
            amount; 
        } else {
            amount -= 1; 
        }
        value.textContent = amount;
    });
});

product.forEach((el) => {
    const productAdd = el.querySelector('.product__add');
    productAdd.onclick = function() {
        const value = el.querySelector('.product__quantity-value');
        let amount = +value.textContent;

        if (amount > 0) {
            let id = el.getAttribute('data-id');
            let src = el.querySelector('.product__image').getAttribute('src');

            let products = [...cart.children];
            const productInCard = products.find(i => i.getAttribute('data-id') === id);

            if (!productInCard) {
                cart.insertAdjacentHTML("beforeend", `
                <div class="cart__product" data-id = ${id}>
                <a href="#" class="cart__product-remove" style="color: red; font-size: 10px; text-decoration: none">Удалить</a>
                <img class="cart__product-image" src=${src}>
                <div class="cart__product-count"> ${value.textContent}</div>                    
                </div>
                `);
            } else {
                let productAmount = +productInCard.lastElementChild.textContent;
                productInCard.lastElementChild.textContent = productAmount + amount;
            };
        };   

        const buttonRemove = cart.lastElementChild.querySelector('.cart__product-remove');

        buttonRemove.onclick = function() {
                let div = buttonRemove.closest('.cart__product');
                div.remove();
                return false;
            };        
    };
});