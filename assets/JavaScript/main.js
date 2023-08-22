const btnFirst = document.querySelector('.btn-first')
const btnSecond = document.querySelector('.btn-second')
const checkbox = document.querySelectorAll('.checkbox')
const checkboxInput = document.querySelectorAll('.checkbox-input')
const cardBtn = document.querySelectorAll('.card__btn')
const cardTariffBtn = document.querySelectorAll('.card__tariff-btn')
const cardItem = document.querySelectorAll('.card__item')
const cardItemBg = document.querySelectorAll('.card__item-bg')
const cardPrice = document.querySelectorAll('.card__price');
const card = document.querySelector('.card')
const Delete = document.querySelectorAll('.delete')
const infoTextBlock = document.querySelectorAll('.info-text-block')
const btnDecoration = document.querySelectorAll('.btn-decoration')
const channels = document.querySelector('.channels')
const navBurgerr = document.querySelector('.nav__burgerr')
const burgerElement = document.querySelector('.burger-element')
const containerOpacity = document.querySelector('.container-opacity')


burgerElement.addEventListener('click', () => {
    burgerElement.classList.toggle('active')
    navBurgerr.classList.toggle('active')
    containerOpacity.classList.toggle('active')
});

let btnSecondCounter = 0;  
btnSecond.addEventListener('click', (e) => {
    btnSecondCounter++
    clicked = true;
    cardPrice.forEach(item => {
        if (btnSecondCounter > 1) {
            item.textContent = item.textContent
        } else {
            item.textContent *= 3;
            btnFirstCounter = 0
        }
    })

    btnSecond.classList.add('button--green');
    btnFirst.classList.add('button--transparent', 'channels__button-color');
    btnFirst.classList.remove('button--black');
    cardTariffBtn.forEach((tBtn) => {
        tBtn.classList.add('button--green');
    });
    cardBtn.forEach((btn) => {
        btn.textContent = 'Частный канал';
        btn.classList.add('button--green');
    });
    checkboxInput.forEach((item) => {
        item.checked = true;
    });
    checkbox.forEach((item) => {
        item.querySelector('.checkbox-input').classList.add('checked');
        item.classList.add('active');
    })
    cardItemBg.forEach(item => {
        item.classList.add('bg-active');
    })
    btnDecoration.forEach((decoration) => {
        decoration.classList.add('decor-active');
    });
    infoTextBlock.forEach(item => {
        item.classList.remove('display-none');
    });

    Delete.forEach(item => {
        item.classList.add('display-none');
    });
})

let btnFirstCounter = 0;  
btnFirst.addEventListener('click', () => {
    btnFirstCounter--
    clicked = false;
    cardPrice.forEach(item => {
        if (btnFirstCounter < -1) {
            item.textContent = item.textContent
        } else {
            item.textContent /= 3;
            btnSecondCounter = 0
        }
    })

    btnFirst.classList.add('button--black');
    btnSecond.classList.add('button--transparent', 'channels__button-color');
    btnSecond.classList.remove('button--green');
    cardTariffBtn.forEach((tBtn) => {
        tBtn.classList.remove('button--green');
    });
    cardBtn.forEach((btn) => {
        btn.textContent = 'Общий канал';
        btn.classList.remove('button--green');
    });
    checkboxInput.forEach((item) => {
        item.checked = false;
    });
    checkbox.forEach((item) => {
        item.querySelector('.checkbox-input').classList.remove('checked');
        item.classList.remove('active');
    })
    cardItemBg.forEach(item => {
        item.classList.remove('bg-active');
    })
    btnDecoration.forEach((decoration) => {
        decoration.classList.remove('decor-active');
    });
    infoTextBlock.forEach(item => {
        item.classList.add('display-none');
    });

    Delete.forEach(item => {
        item.classList.remove('display-none');
    });
})

let clicked = true;
cardItem.forEach((item) => {
    const checkbox = item.querySelector('.checkbox');
    const checkboxInput = item.querySelector('.checkbox-input');
    const btnDecoration = item.querySelectorAll('.btn-decoration');
    const cardBtn = item.querySelector('.card__btn');
    const cardTariffBtn = item.querySelector('.card__tariff-btn');
    const cardItemBg = item.querySelector('.card__item-bg');
    const cardPrice = item.querySelector('.card__price');
    const Delete = item.querySelectorAll('.delete')
    const infoTextBlock = item.querySelectorAll('.info-text-block')

    
    const originalPrice = parseInt(cardPrice.textContent);
    
    checkbox.addEventListener('click', e => {

        infoTextBlock.forEach(item => {
            item.classList.toggle('display-none');
        });

        Delete.forEach(item => {
            item.classList.toggle('display-none');
        });

        originalPrice;
        if (cardPrice.textContent != originalPrice * 3) {
            cardPrice.textContent = originalPrice * 3;
        } else {
            cardPrice.textContent = originalPrice;
        }

        checkboxInput.classList.remove('checked');
        checkbox.classList.toggle('active');
        
        cardBtn.textContent === 'Частный канал' 
           ? cardBtn.textContent = 'Общий канал' 
           : cardBtn.textContent = 'Частный канал'
                    
        cardBtn.classList.toggle('button--green');

        cardTariffBtn.classList.toggle('button--green');
        cardItemBg.classList.toggle('bg-active');

        btnDecoration.forEach((decoration) => {
            decoration.classList.toggle('decor-active');
        });
    });
});

let multiplier = 1;

const updatePrices = () => {
    cardPrice.forEach(item => {
        const originalPrice = parseInt(item.dataset.originalPrice);
        item.textContent = originalPrice * multiplier;
    });
};

const updateButtons = () => {
    btnSecond.classList.toggle('button--green', multiplier === 3);
    btnFirst.classList.toggle('button--black', multiplier === 1);
};

btnSecond.addEventListener('click', () => {
    multiplier = 3;
    updatePrices();
    updateButtons();
});

btnFirst.addEventListener('click', () => {
    multiplier = 1;
    updatePrices();
    updateButtons();
});

cardItem.forEach(item => {
    const cardPrice = item.querySelector('.card__price');
    cardPrice.dataset.originalPrice = cardPrice.textContent;
});

updatePrices();
updateButtons();
