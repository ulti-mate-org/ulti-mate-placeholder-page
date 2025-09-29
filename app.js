const heroCardsNodes = document.querySelectorAll('.hero-card');
const heroCards = Array.from(heroCardsNodes);



function positionCards() {
    heroCards.forEach((card, index) => {
        card.style.transform = `translateX(${index * 135}%)`;
    });
}

positionCards();

setInterval(() => {
    heroCards.push(heroCards.shift());
    positionCards();
}, 5000);