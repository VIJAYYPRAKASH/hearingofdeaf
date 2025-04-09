const images = [
    'https://eskipaper.com/images/stunning-leaves-wallpaper-1.jpg'
];
let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change the background every 5 seconds
setInterval(changeBackground, 5000);