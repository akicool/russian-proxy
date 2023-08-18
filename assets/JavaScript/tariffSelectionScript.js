const managerCancel = document.querySelector('.manager__cancel')
const managerChangePlan = document.querySelector('.manager__change-plan')
const managerButton = document.querySelector('.manager__button')
const selectChangeTariffButton = document.querySelectorAll('.select-change__tariff-button')
const time = document.querySelectorAll('.time')
let selectedBtn = document.querySelector('.button--blue');
const commonChannelButton = document.querySelector('.common');
const privateChannelButton = document.querySelector('.private');
const changes = document.querySelector('.changes');
const typeChannel = document.querySelectorAll('.type-channel');
const selectPanelManager = document.querySelector('.select-panel__manager')
const selectPanelHistory = document.querySelector('.select-panel__history')
const managerPanel = document.querySelector('.manager__panel')
const parameterHistory = document.querySelector('.parameter-history')

managerChangePlan.addEventListener('click', () => {
    managerCancel.classList.remove('display-none');
    managerChangePlan.classList.add('display-none');
    changes.classList.remove('display-none');
});
managerCancel.addEventListener('click', () => {
    managerCancel.classList.add('display-none');
    changes.classList.add('display-none');
    managerChangePlan.classList.remove('display-none');
});

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
    });
});

commonChannelButton.addEventListener('click', () => {
    selectedChannel = "Общий";
    typeChannel.forEach(item => {
        item.textContent = selectedChannel
    })
    commonChannelButton.classList.add('button--black');
    privateChannelButton.classList.remove('button--black');
    updatePrice(selectedBtn);
});

privateChannelButton.addEventListener('click', () => {
    selectedChannel = "Частный";
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

        if (selectedChannel === "Частный") {
            price *= 3;
        }

        priceElement.forEach(item => {
            item.textContent = price;
        })
    }
}

selectPanelManager.addEventListener('click', (e) => {

    selectPanelManager.classList.toggle('active');
    selectPanelHistory.classList.remove('active');
    managerPanel.classList.toggle('active');
    parameterHistory.classList.add('display-none');

    managerCancel.classList.add('display-none');
    managerChangePlan.classList.remove('display-none');
});

selectPanelHistory.addEventListener('click', () => {
    selectPanelManager.classList.remove('active');
    selectPanelHistory.classList.toggle('active');
    parameterHistory.classList.remove('display-none');
    managerPanel.classList.toggle('active');
    changes.classList.add('display-none');
});



