const selectChangeTariffButton = document.querySelectorAll('.select-change__tariff-button')
const time = document.querySelectorAll('.time')
let selectedBtn = document.querySelector('.button--blue');
const commonChannelButton = document.querySelector('.common');
const privateChannelButton = document.querySelector('.private');
const typeChannel = document.querySelectorAll('.type-channel');
const priceContentButton = document.querySelector('.price-content__button');
const container = document.querySelector('.container');
const modalOverlay = document.querySelector('.modal-overlay');


const tariffPrices = {
    "1 день": 50,
    "7 дней": 250,
    "14 дней": 400,
    "30 дней": 600,
    "90 дней": 1700,
};

let selectedChannel = "Общий";

selectChangeTariffButton.forEach(item => {

    const priceElementV = document.querySelectorAll('.price');

    item.addEventListener('click', () => {
        if (selectedBtn) {
            selectedBtn.classList.remove('button--blue');
        }
        item.classList.add('button--blue');
        selectedBtn = item;
        
        const tariff = item.textContent.trim(); 

        time.forEach(timeEl => {
            timeEl.textContent = item.textContent
        });

        if (tariffPrices.hasOwnProperty(tariff)) {
            let price = tariffPrices[tariff];

            if (selectedChannel === "Частный") {
                price *= 3;
            }

            priceElementV.forEach(item => {
                item.textContent = price;
            })
        }
        updatePrice(selectedBtn);
    });
});

commonChannelButton.addEventListener('click', () => {
    selectedChannel = "Общий канал";
    typeChannel.forEach(item => {
        item.textContent = selectedChannel
    })
    commonChannelButton.classList.add('button--black');
    privateChannelButton.classList.remove('button--black');
    updatePrice(selectedBtn);
});

privateChannelButton.addEventListener('click', () => {
    selectedChannel = "Частный канал";
    typeChannel.forEach(item => {
        item.textContent = selectedChannel
    })
    privateChannelButton.classList.add('button--black');
    commonChannelButton.classList.remove('button--black');
    commonChannelButton.classList.add('select-change__button--transparent');
    commonChannelButton.classList.add('button--transparent');
    updatePrice(selectedBtn);
});

function updatePrice(selectedButton) {
    const tariff = selectedButton.textContent.trim();
    const priceElement = document.querySelectorAll('.price');


    if (tariffPrices.hasOwnProperty(tariff)) {
        let price = tariffPrices[tariff];

        if (selectedChannel === "Частный канал") {
            price *= 3;
        }

        priceElement.forEach(item => {
            item.textContent = price;
        })
    }
}

commonChannelButton.addEventListener('click', () => {
    commonChannelButton.classList.add('button--black');
    privateChannelButton.classList.remove('button--black');
});

priceContentButton.addEventListener('click', () => {
    container.classList.add('blur-active')
    modalOverlay.classList.add('active')
});
modalOverlay.addEventListener('click', () => {
    container.classList.remove('blur-active')
    modalOverlay.classList.remove('active')
});

privateChannelButton.addEventListener('click', () => {
    privateChannelButton.classList.add('button--black');
    commonChannelButton.classList.remove('button--black');
    commonChannelButton.classList.add('select-change__button--transparent');
    commonChannelButton.classList.add('button--transparent');
});