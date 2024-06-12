document.addEventListener('DOMContentLoaded', () => {
    const plusButton = document.querySelectorAll('.plus_btn');
    const minusButton = document.querySelectorAll('.minus_btn');
    const fullPrice = document.querySelector('.full_price');

  

    
    
    

    plusButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            const ElQuantity = document.querySelectorAll('.text')[index];
            const ElPrice = document.querySelectorAll('.price_souce')[index];
            
            
            let count = parseInt(ElQuantity.textContent);
            let price = parseInt(ElPrice.textContent);
            let totalPrice = parseInt(fullPrice.textContent)
            if(count < 10) {
                count++;
                price += 60;
    
                ElQuantity.textContent = count;
    
                if (index === 0 && count === 1) {  // Добавлено условие для кетчупа при количестве 1
                    ElPrice.textContent = `+0 ₽`;
                } else {
                    ElPrice.textContent = `+${price} ₽`;
                    totalPrice += 60;
                    fullPrice.textContent = `${totalPrice} ₽`;
                }
            }
        })
    })



    minusButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            const ElQuantity = document.querySelectorAll('.text')[index];
            const ElPrice = document.querySelectorAll('.price_souce')[index];
            let count = parseInt(ElQuantity.textContent);
            let price = parseInt(ElPrice.textContent);
            let totalPrice = parseInt(fullPrice.textContent)
            if(count > 0) {
                count--;
                if (count > 0) { 
                    price -= 60;
                    totalPrice -= 60;
                    ElPrice.textContent = `+${price} ₽`;
                    fullPrice.textContent = `${totalPrice} ₽`;

                }
                ElQuantity.textContent = count;
    
                if (index == !0 || count == !1) {  // Добавлено условие для кетчупа при количестве 1
                    ElPrice.textContent = `+${price} ₽`;
                    fullPrice.textContent = `${totalPrice} ₽`;
                }
            }
        })
    })
    
})