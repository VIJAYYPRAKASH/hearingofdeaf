const imagePath = path.join(__dirname, 'images', label, imageName);
if (!fs.existsSync(path.dirname(imagePath))) {
    fs.mkdirSync(path.dirname(imagePath), { recursive: true });
}
