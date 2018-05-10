const shuffle = cards => {
    let currentIndex = cards.length, temp, randomIndex;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    return cards;
};

export default shuffle;