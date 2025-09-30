const heroCardsNodes = document.querySelectorAll('.hero-card');
const heroCards = Array.from(heroCardsNodes);

function positionCards() {
    let offset = -1;
    heroCards.forEach((card, index) => {
        card.classList.toggle('visible', index === 1);
        card.style.transform = `translateX(${(offset + index) * 150}%)`;
    });

}

positionCards();

setInterval(() => {
    heroCards.push(heroCards.shift());
    positionCards();
}, 5000);