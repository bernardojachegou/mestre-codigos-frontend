const lastAddedSection = document.querySelector('#lastAddeds');
const navbar = document.querySelector('.navbar');

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

function changeNavbarBgColor(navbar) {
    window.addEventListener('scroll', () => {
        console.log(navbar.offsetHeight);
        window.scrollY > navbar.offsetHeight / 3
            ? (navbar.style.background = 'black')
            : (navbar.style.background = 'transparent');
    });
}
changeNavbarBgColor(navbar);
