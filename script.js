
const NUM_SNOWFLAKES = 50;

function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');

    for (let i = 0; i < NUM_SNOWFLAKES; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflakesContainer.appendChild(snowflake);

        // Set random position for each snowflake
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = Math.random() * 100 + 'vh';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createSnowflakes();
});







function createSnowflakes() {
    const snowflakesContainer = document.querySelector('.snowflakes');

    for (let i = 0; i < NUM_SNOWFLAKES; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        if (i % 2 === 0) {
            snowflake.classList.add('side-fall');
        }
        snowflakesContainer.appendChild(snowflake);

        // Set random position for each snowflake
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = Math.random() * 100 + 'vh';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createSnowflakes();
}) 

// Autoplay background music
document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('music');
    backgroundMusic.play();
});

const quotes = [
    "May your days be merry and bright.",
    "Let the spirit of love gently fill our hearts and homes.",
    "Jingle all the way!",
    "The best way to spread Christmas cheer is singing loud for all to hear.",
    "Christmas is not as much about opening our presents as opening our hearts.",
    "Tis the season to be jolly!",
    "Good tidings we bring to you and your kin.",
    "Wishing you a holly, jolly Christmas!",
    "May your heart and home be filled with all of the joys the festive season brings.",
    "Christmas is the day that holds all time together."
];

function generateQuote() {
    const quoteContainer = document.getElementById('quote-text');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteContainer.textContent = randomQuote;

    // Play a sound when generating a quote
    const soundEffect = new Audio('music.mp3'); // Replace with your sound file
    soundEffect.play();
} 

function playSound() {
    const soundEffect = new Audio('music.mp3'); // Replace with your sound file
    soundEffect.play();
}

function combinedFunction() {
    generateQuote();
    playSound();
}

// const quotes = [
//     "May your days be merry and bright.",
//     "Let the spirit of love gently fill our hearts and homes.",
//     "Jingle all the way!",
//     "The best way to spread Christmas cheer is singing loud for all to hear.",
//     "Christmas is not as much about opening our presents as opening our hearts.",
//     "Tis the season to be jolly!",
//     "Good tidings we bring to you and your kin.",
//     "Wishing you a holly, jolly Christmas!",
//     "May your heart and home be filled with all of the joys the festive season brings.",
//     "Christmas is the day that holds all time together."
// ];

// function generateQuote() {
//     const quoteContainer = document.getElementById('quote-text');
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     quoteContainer.textContent = randomQuote;
// }
//    // Play a sound when generating a quote
//    const soundEffect = new Audio('music.mp3'); // Replace with your sound file
//    soundEffect.play();