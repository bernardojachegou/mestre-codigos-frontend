const movieCards = document.querySelectorAll('.carousel-card');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
let index = 0;

function handleNumberOfCardsToPass() {
    const bodyWidth = body.offsetWidth;
    let numberOfCardsToPass = 0;

    if (bodyWidth <= 750) {
        numberOfCardsToPass = 1;
    } else if (bodyWidth > 750 && bodyWidth <= 1100) {
        numberOfCardsToPass = 2;
    } else if (bodyWidth > 1100 && bodyWidth <= 1400) {
        numberOfCardsToPass = 3;
    } else {
        numberOfCardsToPass = 7;
    }
    return numberOfCardsToPass;
}

function seePrevCard() {
    let increase = handleNumberOfCardsToPass();
    increase = -increase;
    index = index + increase;

    index = Math.min(Math.max(index, 0), movieCards.length - 1);

    index === 0
        ? prevButton.classList.add('inactive')
        : nextButton.classList.remove('inactive');

    movieCards[index].scrollIntoView({ behavior: 'smooth' });
}

function seeNextCard() {
    let increase = handleNumberOfCardsToPass();
    index = index + increase;
    index = Math.min(Math.max(index, 0), movieCards.length - 1);

    index === movieCards.length - 1
        ? nextButton.classList.add('inactive')
        : prevButton.classList.remove('inactive');

    movieCards[index].scrollIntoView({ behavior: 'smooth' });
}

function changeNavbarBgColor(navbar) {
    window.addEventListener('scroll', () => {
        window.scrollY > navbar.offsetHeight / 3
            ? (navbar.style.background = '#141414')
            : (navbar.style.background = 'transparent');
    });
}

changeNavbarBgColor(navbar);
