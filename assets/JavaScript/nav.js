const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav__link')
const navLinkText = document.querySelectorAll('.nav__link-text')
const navItem = document.querySelectorAll('.nav__item')
const additionalText = document.querySelectorAll('.additional-text')
const navGeneralBlock = document.querySelector('.nav__general-block')

const main = document.querySelector('.main')

const pointingToMenu = (event) => {
    nav.classList.toggle('active');
    main.classList.toggle('active');
    menuBtn.classList.toggle('active');
    navGeneralBlock.classList.toggle('active');
    additionalText.forEach(item => item.classList.toggle('active'));
}

const unPointingToMenu = (event) => {
    nav.classList.remove('active');
    main.classList.remove('active');
    menuBtn.classList.remove('active');
    navGeneralBlock.classList.remove('active');
    additionalText.forEach(item => item.classList.remove('active'));
}

menuBtn.addEventListener('click', pointingToMenu);

main.addEventListener('click', unPointingToMenu);

navLinkText.forEach((item, index) => {
    menuBtn.addEventListener('click', () => {
        if (index !== 0) {
            navLinkText[index].classList.toggle('show');
        }
    })
    main.addEventListener('click', () => {
        if (index !== 0) {
            navLinkText[index].classList.remove('show');
        }
    })
})


navItem.forEach((item, index) => {
    let timer;
    item.addEventListener('mouseover', () => {
        if (index !== 0) {
            navItem[index].classList.add('show');
            clearTimeout(timer);
            timer = setTimeout(() => {
                navItem[index].classList.add('item-pos');
                navLinkText[index].classList.add('active');
            }, 600);
        }
    });
    item.addEventListener('mouseout', () => {
        if (index !== 0) {
            navItem[index].classList.remove('show');
            clearTimeout(timer);
            timer = setTimeout(() => {
                navItem[index].classList.remove('item-pos');
                navLinkText[index].classList.remove('active');
            }, 0);
        }
    });
})