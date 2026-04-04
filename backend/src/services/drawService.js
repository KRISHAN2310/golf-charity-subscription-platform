// backend/src/services/drawService.js

exports.generateDrawNumbers = () => {
    const numbers = new Set();

    while (numbers.size < 5) {
        const num = Math.floor(Math.random() * 45) + 1;
        numbers.add(num);
    }

    return Array.from(numbers);
};


// OPTIONAL: match logic (important for PRD)
exports.checkMatches = (userScores, drawNumbers) => {
    let matchCount = 0;

    userScores.forEach(score => {
        if (drawNumbers.includes(score.value)) {
            matchCount++;
        }
    });

    return matchCount;
};