const images = [
    'https://wallpapercave.com/wp/BPH54Ax.jpg'
];
let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change the background every 5 seconds
setInterval(changeBackground, 5000);
