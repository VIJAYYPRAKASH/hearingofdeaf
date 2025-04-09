function displayImage() {
  const userInput = document.getElementById("textInput").value.toLowerCase();
  const imageContainer = document.getElementById("imageContainer");

  imageContainer.innerHTML = ""; // Clear the container

  // Mapping keywords to image file paths
  const keywordToImage = {
      hi: "C:/png1english/hi.png",          // Corrected to forward slashes
      hello: "C:/png1english/hello.png",    // Update the path accordingly
      bye: "C:/png1english/bye.png",
      fine: "C:/png1english/fine.png",
  };

  if (keywordToImage[userInput]) {
      const img = document.createElement("img");
      img.src = keywordToImage[userInput]; // Set the image path dynamically
      img.alt = `${userInput} Image`;
      img.style.maxWidth = "200px"; // Optional: Limit the image size for better display
      img.style.height = "auto";

      imageContainer.appendChild(img);
  } else {
      imageContainer.innerHTML = "<p>No matching input. Try typing a valid keyword like 'hi', 'hello', 'bye', or 'fine'.</p>";
  }
}

