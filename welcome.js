// Dynamic text animation
let textElement = document.querySelector("h1");
let colors = ["#ff7eb3", "#ffa866", "#f5cf85", "#94ebcd"];
let colorIndex = 0;

function changeTextColor() {
    textElement.style.color = colors[colorIndex];
    textElement.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size between 20px and 40px
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeTextColor, 1000); // Change color and size every second

// Glowing effect for button
let buttonElement = document.querySelector(".navigate-button");
let glowColors = ["rgba(196, 244, 190, 0.6)", "rgba(0, 255, 0, 0.6)", "rgba(159, 245, 169, 0.6)"];
let glowIndex = 0;

function applyGlowEffect() {
    buttonElement.style.boxShadow = `0 0 10px ${glowColors[glowIndex]}`;
    glowIndex = (glowIndex + 1) % glowColors.length;
}

setInterval(applyGlowEffect, 700); // Change glow effect every 700ms

// Navigation logic
buttonElement.addEventListener("click", () => {
    window.location.href = "register.html"; // Navigate to the register page
});
const images = [
    'https://cdn.pixabay.com/photo/2015/05/28/10/32/hyacinth-787842__340.jpg'
];
let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change the background every 5 seconds
setInterval(changeBackground, 5000);
