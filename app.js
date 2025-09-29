const heroCardsNodes = document.querySelectorAll('.hero-card');
const heroCards = Array.from(heroCardsNodes);

function positionCards() {
    let offset = -1;
    heroCards.forEach((card, index) => {
        card.style.transform = `translateX(${(offset + index) * 150}%)`;
        card.style.transition = '';
    });

    heroCards[heroCards.length - 1].style.transition = 'none';

}

positionCards();

setInterval(() => {
    heroCards.push(heroCards.shift());
    positionCards();
}, 5000);