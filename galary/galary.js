// Function to create gallery items
function createGallery() {
    const gallery = document.getElementById('gallery');

    // Reverse the order of imageData to show latest images first
    const reversedImageData = imageData.slice().reverse(); // Create a reversed copy of the imageData array

    reversedImageData.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = image.viewUrl;
        img.alt = image.alt;
        img.onclick = () => showFullImage(image.viewUrl, image.alt);
        img.onerror = function() {
            img.src = 'https://via.placeholder.com/150'; // Placeholder image on error
            img.alt = 'Image not found';
        };

        const infoDiv = document.createElement('div');
        infoDiv.className = 'gallery-item-info';

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.onclick = (e) => {
            e.stopPropagation(); // Prevent modal from opening
            downloadImage(image.downloadUrl, image.alt);
        };

        infoDiv.appendChild(downloadButton);
        galleryItem.appendChild(img);
        galleryItem.appendChild(infoDiv);
        gallery.appendChild(galleryItem);
    });
}

// Function to handle image download
function downloadImage(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; // Use the image filename for download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to show full-size image in modal
function showFullImage(url, alt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = url;
    captionText.innerHTML = alt;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Event listener for closing the modal
const closeModalBtn = document.querySelector('.close');
closeModalBtn.onclick = closeModal;

// Initialize the gallery when the page loads
window.onload = createGallery;