const lastAddedSection = document.querySelector('#lastAddeds');
const hypeSection = document.querySelector('#hype');
const navbar = document.querySelector('#navbar');

function carouselScroll(selectedElement) {
    selectedElement.addEventListener(
        'wheel',
        (e) => {
            e.deltaY > 0
                ? e.target.scrollBy(350, 0)
                : e.target.scrollBy(-350, 0);
        },
        { passive: true }
    );
}
carouselScroll(lastAddedSection);
carouselScroll(hypeSection);

function changeNavbarBgColor(navbar) {
    window.addEventListener('scroll', () => {
        window.scrollY > navbar.offsetHeight
            ? (navbar.style.background = 'black')
            : (navbar.style.background = 'transparent');
    });
}
changeNavbarBgColor(navbar);
