const labels = ['Hi', 'Hello', 'Thanks', 'Please', 'ILoveYou', 'Yes', 'No'];
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const labelSelector = document.createElement('select');
labelSelector.id = 'label-selector';
labels.forEach(label => {
    const option = document.createElement('option');
    option.value = label;
    option.textContent = label;
    labelSelector.appendChild(option);
});
container.appendChild(labelSelector);

const captureButton = document.createElement('button');
captureButton.textContent = "Capture Image";
container.appendChild(captureButton);

const status = document.createElement('p');
status.id = 'status';
status.textContent = 'Status: Waiting to capture...';
container.appendChild(status);

const video = document.createElement('video');
video.id = 'video';
video.autoplay = true;
video.playsInline = true;
container.appendChild(video);
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing the camera:", error);
        status.textContent = "Camera access denied!";
    });
captureButton.addEventListener('click', async () => {
    const label = labelSelector.value;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    const response = await fetch('/save-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ label, image: imageData })
    });

    const result = await response.json();
    if (result.success) {
        status.textContent = `Image for "${label}" saved successfully!`;
    } else {
        status.textContent = `Failed to save image for "${label}".`;
    }
});