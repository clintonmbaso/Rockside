// Function to generate potential image URLs based on a range
function generateImagePaths(folder, prefix, start, end, extension) {
    const images = [];
    for (let i = start; i <= end; i++) {
        const fileName = `${prefix}${String(i).padStart(4, '0')}.${extension}`;
        images.push(`${folder}/${fileName}`);
    }
    return images;
}

// Function to check if an image actually exists
function validateImages(imagePaths, callback) {
    const validImages = [];
    let loadedCount = 0;

    imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            validImages.push(path); // Only add if the image loads
            checkCompletion();
        };
        img.onerror = checkCompletion; // Skip broken images
    });

    function checkCompletion() {
        loadedCount++;
        if (loadedCount === imagePaths.length) {
            callback(validImages); // Run callback once all images are checked
        }
    }
}

// Example usage for both folders
const images1 = generateImagePaths(
    './images/crossOver2024', 
    'IMG-20241228-WA', 
    59, 
    165, 
    'jpg'
);

const images2 = generateImagePaths(
    './images/crossOver2024', 
    'IMG-20250106-WA', 
    99, 
    251, 
    'jpg'
);

// Validate both sets of images, then start slideshow
validateImages([...images1, ...images2], (validImages) => {
    console.log('Valid images:', validImages);
    startSlideshow(validImages);
});

// Slideshow setup
function startSlideshow(images) {
    const imageElement = document.getElementById('slideshow-image');
    let previousIndex = -1;

    function showNextImage() {
        if (images.length === 0) {
            console.error('No valid images to display.');
            return;
        }

        let currentIndex;
        do {
            currentIndex = Math.floor(Math.random() * images.length);
        } while (currentIndex === previousIndex);

        previousIndex = currentIndex;
        imageElement.src = images[currentIndex];
    }

    showNextImage();
    setInterval(showNextImage, 10000); // Change image every 10 seconds
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', () => {
    console.log('Slideshow initialized...');
});