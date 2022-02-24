const movieCards = document.querySelectorAll('.carousel-card');
const navbar = document.querySelector('.navbar');
let index = 0;

function carouselScroll(increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0), movieCards.length - 1);
    movieCards[index].scrollIntoView({ behavior: 'smooth' });
}

function changeNavbarBgColor(navbar) {
    window.addEventListener('scroll', () => {
        console.log(navbar.offsetHeight);
        window.scrollY > navbar.offsetHeight / 3
            ? (navbar.style.background = '#141414')
            : (navbar.style.background = 'transparent');
    });
}

changeNavbarBgColor(navbar);
