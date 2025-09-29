const heroCardsNodes = document.querySelectorAll('.hero-card');
const heroCards = Array.from(heroCardsNodes);

function positionCards() {
    let offset = -1;
    heroCards.forEach((card, index) => {
        card.style.transform = `translateX(${(offset + index) * 135}%)`;
    });
}

positionCards();

let startIndex = 0;
setInterval(() => {
    let transitionTmp = heroCards[0].style.transition;
    heroCards[0].style.transition = 'none';
    heroCards.push(heroCards.shift());
    heroCards[0].style.transition = transitionTmp;

    positionCards();
}, 5000);