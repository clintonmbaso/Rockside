// Array of image paths in the gallery directory
        const images = [
            'gallery/1a.jpg',
            'gallery/2.jpg',
            'gallery/3a.jpg'
        ];

        function startSlideshow() {
            const imageElement = document.getElementById('slideshow-image');
            let currentIndex = 0;

            function showNextImage() {
                currentIndex = Math.floor(Math.random() * images.length); // Pick a random image
                imageElement.src = images[currentIndex];
            }

            showNextImage(); // Show the first image immediately
            setInterval(showNextImage, 5000); // Change the image every 5 seconds
        }

        // Start the slideshow
        startSlideshow();