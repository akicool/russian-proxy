const managerCancel = document.querySelector('.manager__cancel')
const managerChangePlan = document.querySelector('.manager__change-plan')
const selectChangeTariffButton = document.querySelectorAll('.select-change__tariff-button')
const time = document.querySelectorAll('.time')
let selectedBtn = document.querySelector('.button--blue');
const commonChannelButton = document.querySelector('.common');
const privateChannelButton = document.querySelector('.private');

let customEvent = new Event('click');

managerChangePlan.addEventListener('click', () => {
    managerCancel.classList.remove('display-none');
    managerChangePlan.classList.add('display-none');
});
managerCancel.addEventListener('click', () => {
    managerCancel.classList.add('display-none');
    managerChangePlan.classList.remove('display-none');
});

const tariffPrices = {
    "1 день": 50,
    "7 дней": 250,
    "14 дней": 400,
    "30 дней": 600,
    "90 дней": 1700,
};

selectChangeTariffButton.forEach(item => {
    item.addEventListener('click', () => {
        if (selectedBtn) {
            selectedBtn.classList.remove('button--blue');
        }
        item.classList.add('button--blue');
        selectedBtn = item;
        
        const tariff = item.textContent.trim(); 
        const priceElement = document.querySelector('.price');

        time.forEach(timeEl => {
            timeEl.textContent = item.textContent
        });

        if (tariffPrices.hasOwnProperty(tariff)) {
            const price = tariffPrices[tariff];
            priceElement.textContent = price;

            if (selectedChannel === "Частный") {
                price *= 3;
                customEvent.dispatchEvent(customEvent);
            }
        }
    });
})


let selectedChannel = "Общий";

commonChannelButton.addEventListener('click', () => {
    selectedChannel = "Общий";
    commonChannelButton.classList.add('button--black');
    privateChannelButton.classList.remove('button--black');
    updatePrice(selectedBtn);
});

privateChannelButton.addEventListener('click', () => {
    selectedChannel = "Частный";
    privateChannelButton.classList.add('button--black');
    commonChannelButton.classList.remove('button--black');
    commonChannelButton.classList.add('select-change__button--transparent');
    commonChannelButton.classList.add('button--transparent');
    updatePrice(selectedBtn);
});

function updatePrice(selectedButton) {
    const tariff = selectedButton.textContent.trim();
    const priceElement = document.querySelector('.price');

    if (tariffPrices.hasOwnProperty(tariff)) {
        let price = tariffPrices[tariff];

        if (selectedChannel === "Частный") {
            price *= 3;
        }

        priceElement.textContent = price;
    }
}






