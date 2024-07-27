// JavaScript for image navigation
let currentImageIndex = 0;
const images = ['p1.jpg', 'p10.jpg', 'p7.jpg','p5.jpg', 'p4.jpg','p8.jpg']; // Add paths to your images here

function showImage(index) {
  const imageElement = document.getElementById('gallery-image');
  imageElement.src = images[index];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Initialize gallery with the first image
showImage(currentImageIndex);
