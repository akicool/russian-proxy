const account = document.querySelector('.account')
const accountBlock = document.querySelector('.account-block')
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
const selectPanelManager = document.querySelector('.select-panel__manager')
const selectPanelHistory = document.querySelector('.select-panel__history')
const managerPanel = document.querySelector('.manager__panel')
const managerTime = document.querySelector('.manager__time')
const managerSelectTariff = document.querySelector('.manager__select-tariff')
const managerCancel = document.querySelector('.manager__cancel')
const channels = document.querySelector('.channels')
const inProgress = document.querySelector('.inProgress')
const tariffFooterText  = document.querySelector('.tariff__footer-text')
const interactive  = document.querySelector('.interactive')
const parameterHistory = document.querySelector('.parameter-history')

account.addEventListener('click', () => {
    accountBlock.classList.toggle('active');
});

selectPanelManager.addEventListener('click', (e) => {
    selectPanelManager.classList.toggle('active');
    selectPanelHistory.classList.remove('active');
    managerPanel.classList.toggle('active');
    channels.classList.toggle('display-none');
    card.classList.toggle('display-none');
    inProgress.classList.toggle('display-none');
    tariffFooterText.classList.add('bottom25');
    interactive.classList.remove('display-none');
    parameterHistory.classList.add('display-none');
    
    if (!managerCancel.classList.contains('display-none')) {
        channels.classList.remove('display-none');
        card.classList.remove('display-none');
        inProgress.classList.remove('display-none');
        tariffFooterText.classList.remove('bottom25');
    }
});

selectPanelHistory.addEventListener('click', () => {
    selectPanelManager.classList.remove('active');
    selectPanelHistory.classList.toggle('active');
    interactive.classList.add('display-none');
    parameterHistory.classList.remove('display-none');
    tariffFooterText.classList.add('bottom25');
    
});

managerSelectTariff.addEventListener('click', () => {
    channels.classList.remove('display-none');
    card.classList.remove('display-none');
    managerSelectTariff.classList.add('display-none');
    managerCancel.classList.remove('display-none');
    inProgress.classList.remove('display-none');
    tariffFooterText.classList.remove('bottom25');
});

managerCancel.addEventListener('click', () => {
    channels.classList.add('display-none');
    card.classList.add('display-none');
    managerSelectTariff.classList.remove('display-none');
    managerCancel.classList.add('display-none');
    inProgress.classList.add('display-none');
    tariffFooterText.classList.add('bottom25');
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

function getCardTitle(e) {
    const nearestParent = e.target.closest('.card__item')
    const cardTitle = nearestParent.querySelectorAll('.card__title');

    cardTitle.forEach(item => {
        let cardTitleContent = []
        cardTitleContent.push(item.textContent)
        managerTime.textContent = item.textContent
        console.log(cardTitleContent);
    })
}

cardTariffBtn.forEach(item => {
    item.addEventListener('click', getCardTitle)
});

const progressBar = document.querySelector('.inProgress3');
let cardCount = 0;
let cardCountMobile = 0;
let intervalId;

const screenWidth = window.screen.width

function increaseProgress() {
    const currentWidth = parseInt(progressBar.style.width) || 0;
    const newWidth = currentWidth + 1; 
    
    if (newWidth <= 100) {
        progressBar.style.width = newWidth + '%';
    } else {
        progressBar.style.width = '0%';
        card.classList.add('width')
        cardCount++;
        cardCountMobile++;
        
        cardCount > 1 ? 
        cardCount = 0 : 
        cardCount

        cardCountMobile > 3 ? 
        cardCountMobile = 0 : 
        cardCountMobile
        
        if (screenWidth > 475) {
            if (cardCount == 0) {
                cardItem[0].classList.remove('hidden')
                cardItem[1].classList.remove('hidden')
                cardItem[2].classList.add('hidden')
                cardItem[3].classList.add('hidden')
            }
            
            if (cardCount == 1) {
                cardItem[0].classList.add('hidden')
                cardItem[1].classList.add('hidden')
                cardItem[2].classList.remove('hidden')
                cardItem[3].classList.remove('hidden')
            }
        }

        if (screenWidth < 475) {
            if (cardCountMobile === 0) {
                cardItem[0].classList.remove('mobile-hidden', 'hidden')
                cardItem[1].classList.add('mobile-hidden', 'hidden')
                cardItem[3].classList.add('mobile-hidden', 'hidden')
            }
            
            if (cardCountMobile === 1) {
                cardItem[0].classList.add('mobile-hidden', 'hidden')
                cardItem[1].classList.remove('mobile-hidden', 'hidden')
            }
            
            if (cardCountMobile === 2) {
                cardItem[1].classList.add('mobile-hidden', 'hidden')
                cardItem[2].classList.remove('mobile-hidden', 'hidden')
            }
            
            if (cardCountMobile === 3) {
                cardItem[2].classList.add('mobile-hidden', 'hidden')
                cardItem[3].classList.remove('mobile-hidden', 'hidden')
            }
        }
    }
}

function startAnimation() {
    clearInterval(intervalId);
    intervalId = setInterval(increaseProgress, 100);
}

startAnimation()

progressBar.addEventListener('transitionend', function() {
    if (parseInt(progressBar.style.width) === 0) {
        startAnimation();
    }
});

intervalId = setInterval(increaseProgress, 100);