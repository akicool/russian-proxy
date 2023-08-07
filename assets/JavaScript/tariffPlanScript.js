const account = document.querySelector('.account')
const accountBlock = document.querySelector('.account-block')
const btnFirst = document.querySelector('.btn-first')
const btnSecond = document.querySelector('.btn-second')
const checkbox = document.querySelectorAll('.checkbox')
const checkboxInput = document.querySelectorAll('.checkbox-input')
const cardBtn = document.querySelectorAll('.card__btn')
const cardTariffBtn = document.querySelectorAll('.card__tariff-btn')

account.addEventListener('click', () => {
    accountBlock.classList.toggle('active');
});

btnSecond.addEventListener('click', () => {
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
    
})

btnFirst.addEventListener('click', () => {
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
})

checkbox.forEach((item, index) => {
    item.addEventListener('click', () => {
        checkboxInput[index].classList.remove('checked');
        item.classList.toggle('active');
        cardBtn[index].textContent === 'Частный канал' 
        ?
        cardBtn[index].textContent = 'Общий канал' 
        : 
        cardBtn[index].textContent = 'Частный канал'

        cardBtn[index].classList.toggle('button--green');
        cardTariffBtn[index].classList.toggle('button--green');
        
    });
    
})



const progressBar = document.querySelector('.inProgress3');
let intervalId;
function increaseProgress() {
    const currentWidth = parseInt(progressBar.style.width) || 0;
    const newWidth = currentWidth + 1; 
    
    if (newWidth <= 100) {
        progressBar.style.width = newWidth + '%';
    } else {
        progressBar.style.width = '0%';
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
