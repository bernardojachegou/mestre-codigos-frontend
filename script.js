document
    .querySelector('.carousel-cards-section-items')
    .addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            e.target.scrollBy(341, 0);
        } else {
            e.target.scrollBy(-341, 0);
        }
    });
