const fs = require('fs');
const path = require('path');
const cv = require('opencv4nodejs');
const { v4: uuidv4 } = require('uuid'); 
const IMAGE_PATH = 'CollectedImage';
const labels = ['Hello', 'Yes', 'No', 'Thanks', 'ILoveYou', 'Please'];
const numberOfImages = 20;
labels.forEach(async (label) => {
  const imgPath = path.join(IMAGE_PATH, label);
  if (!fs.existsSync(imgPath)) {
    fs.mkdirSync(imgPath, { recursive: true });
  }
  const cap = new cv.VideoCapture(0); 
  console.log(`Collecting images for ${label}`);
  await new Promise(resolve => setTimeout(resolve, 5000));

  for (let imgNum = 0; imgNum < numberOfImages; imgNum++) {
    const frame = cap.read();
    if (!frame.empty) {
      const imageName = path.join(imgPath, `${label}.${uuidv4()}.jpg`);
      cv.imwrite(imageName, frame);
      console.log(`Image saved: ${imageName}`);
    } else {
      console.log("Failed to capture image");
    }

    
    await new Promise(resolve => setTimeout(resolve, 2000));

    
  }

  cap.release(); 
});

console.log("Image collection completed!");
