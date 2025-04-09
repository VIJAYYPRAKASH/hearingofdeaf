navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        const video = document.getElementById('video');
        video.srcObject = stream;
    })
    .catch(err => console.error("Camera access denied:", err));
document.getElementById('capture-button').addEventListener('click', async () => {
    const video = document.getElementById('video');
    const stream = video.srcObject;
    const track = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);
    try {
        const bitmap = await imageCapture.grabFrame();
        const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);
        const blob = await canvas.convertToBlob({ type: 'image/jpeg' });
        const link = document.getElementById('download-link');
        link.href = URL.createObjectURL(blob);
        link.style.display = 'block'; 
        link.textContent = 'Download Captured Image';
    } catch (error) {
        console.error("Error capturing image:", error);
    }
});
