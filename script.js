// JavaScript for work experience section
const experienceItems = document.querySelectorAll('.experience');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');

let currentIndex = 0;

function showExperience(index) {
    experienceItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

showExperience(currentIndex);

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= experienceItems.length) {
        currentIndex = 0;
    }
    showExperience(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = experienceItems.length - 1;
    }
    showExperience(currentIndex);
});


// JavaScript for Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typed-text");

    // Initialize the Typed.js instance
    const options = {
        strings: ["Abhishek Jha"], // Add your desired text here
        typeSpeed: 80, // Typing speed in milliseconds
        showCursor: true, // Hide the cursor
    };

    new Typed(typedText, options);
});

// JavaScript to make the "About Me" section vanish smoothly on scroll
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const scrollPosition = window.scrollY;

    // Adjust the opacity based on the scroll position
    aboutSection.style.opacity = 1 - scrollPosition / (aboutSection.offsetHeight * 0.5);
});

