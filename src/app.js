// Motivational quotes array
const quotes = [
    "Even sunflowers need time to grow tall.",
    "You did a good job. A number doesn't change your hard work.",
    "Consistency > Perfection.",
    "Being solid and reliable is a superpower.",
    "Your worth is not a number on a spreadsheet.",
    "You are planting seeds today for a garden tomorrow.",
    "Happiness is a job well done, followed by a good nap.",
    "You are the anchor that keeps the ship steady.",
    "Sunshine, rain, and patience. You have everything you need to grow."
];

// DOM Elements
const quotePlaque = document.getElementById('quote-plaque');
const quoteText = document.getElementById('quote-text');
const plaqueOverlay = document.getElementById('plaque-overlay');
const boostButton = document.getElementById('boost-button');
const animals = document.querySelectorAll('.animal');

// Track last quote to avoid repeats
let lastQuoteIndex = -1;

// Get random quote (avoid immediate repeats)
function getRandomQuote() {
    let index;
    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (index === lastQuoteIndex && quotes.length > 1);
    lastQuoteIndex = index;
    return quotes[index];
}

// Show quote plaque with animation
function showQuote(quote) {
    quoteText.textContent = quote;
    quotePlaque.classList.remove('hidden', 'hide');
    quotePlaque.classList.add('show');
}

// Hide quote plaque
function hideQuote() {
    quotePlaque.classList.remove('show');
    quotePlaque.classList.add('hide');
    setTimeout(() => {
        quotePlaque.classList.add('hidden');
        quotePlaque.classList.remove('hide');
    }, 300);
}

// Animal click handler
function handleAnimalClick(event) {
    const animal = event.currentTarget;

    // Add bounce animation
    animal.classList.remove('bounce');
    void animal.offsetWidth; // Force reflow
    animal.classList.add('bounce');

    // Show random quote
    const quote = getRandomQuote();
    showQuote(quote);

    // Remove bounce class after animation
    setTimeout(() => {
        animal.classList.remove('bounce');
    }, 500);
}

// Create confetti particle
function createConfettiParticle() {
    const particle = document.createElement('div');
    particle.classList.add('confetti-particle');

    // Randomly choose leaf or petal
    if (Math.random() > 0.5) {
        particle.classList.add('leaf');
    } else {
        particle.classList.add('petal');
    }

    // Random horizontal position across full screen
    particle.style.left = Math.random() * 100 + 'vw';

    // Start from top with slight variation
    particle.style.top = (Math.random() * -10 - 5) + 'vh';

    // Random animation duration (2.5-4.5s)
    const duration = 2.5 + Math.random() * 2;
    particle.style.animationDuration = duration + 's';

    // Random initial rotation
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Random size variation
    const scale = 0.7 + Math.random() * 0.6;
    particle.style.setProperty('--scale', scale.toString());

    document.body.appendChild(particle);

    // Remove after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Trigger confetti burst
function triggerConfetti() {
    // Create 60 particles over 800ms for fuller coverage
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            createConfettiParticle();
        }, i * 13);
    }
}

// Initialize event listeners
function init() {
    // Animal click events
    animals.forEach(animal => {
        animal.addEventListener('click', handleAnimalClick);
        animal.addEventListener('touchend', (e) => {
            e.preventDefault();
            handleAnimalClick(e);
        });
    });

    // Close plaque on overlay click
    plaqueOverlay.addEventListener('click', hideQuote);

    // Close plaque on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideQuote();
        }
    });

    // Boost button confetti
    boostButton.addEventListener('click', triggerConfetti);
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
