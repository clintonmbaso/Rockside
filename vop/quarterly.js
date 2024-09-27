// Get modal elements, blur layer, and the message paragraph
const modal = document.getElementById('messageModal');
const bibleVerseModal = document.getElementById('bibleVerseModal');
const blurLayer = document.getElementById('blurLayer');
const dailyMessageElement = document.getElementById('dailyMessage');
const openModalLink = document.getElementById('openModalLink');
const closeButton = document.getElementsByClassName('close')[0];
const closeBibleButton = document.getElementsByClassName('close-bible')[0];
const bibleVerseContent = document.getElementById('bibleVerseContent');
const nextButton = document.getElementById('nextMessage');
const prevButton = document.getElementById('prevMessage');

let currentIndex = 0; // Initialize the index

// Open modal and display today's message when the link is clicked
openModalLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    currentIndex = getTodayMessageIndex(); // Get the index of today's message

    if (currentIndex !== -1) {
        displayMessage(currentIndex); // Display today's message
        modal.style.display = 'block'; // Show the modal
        blurLayer.style.display = 'block'; // Show the blur layer
    } else {
        alert("No message available for today.");
    }
};

// Close the text modal (main modal)
closeButton.onclick = function() {
    blurLayer.style.display = 'none';
    modal.style.display = 'none'; // Hide the text modal
    checkBlurLayerVisibility(); // Check if blur layer should be hidden
};

// Close the verse modal
closeBibleButton.onclick = function() {
    bibleVerseModal.style.display = 'none'; // Hide the verse modal
    checkBlurLayerVisibility(); // Check if blur layer should be hidden
};

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        blurLayer.style.display = 'none';
        modal.style.display = 'none'; // Hide the main modal
        checkBlurLayerVisibility(); // Check if blur layer should be hidden
    } else if (event.target === bibleVerseModal) {
        bibleVerseModal.style.display = 'none'; // Hide the verse modal
        checkBlurLayerVisibility(); // Check if blur layer should be hidden
    }
};

// Function to check and hide the blur layer if both modals are closed
function checkBlurLayerVisibility() {
    if (modal.style.display === 'none' && bibleVerseModal.style.display === 'none') {
        blurLayer.style.display = 'none'; // Hide the blur layer only if both modals are closed
    }
}

// Function to display the message and its date
function displayMessage(index) {
    const message = getDailyMessage(index);
    const formattedDate = formatDate(message.date); // Format the date
    dailyMessageElement.innerHTML = `
        <h2>${message.title}</h2> <!-- Display the message title -->
        <h4 class="lesson">${message.lesson}</h4>
        <p class="date">${formattedDate}</p>   <!-- Display the formatted date -->
    <hr class="hr">
        <p class="actual">${message.text}</p>           <!-- Display the message text -->
    `;
    
    // Disable buttons if at the start or end of the message array
    prevButton.disabled = (index === 0);
    nextButton.disabled = (index === dailyMessages.length - 1);
}

// Function to format the date (e.g., Monday, June 23, 2024)
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Function to get today's message index
function getTodayMessageIndex() {
    const today = new Date();
    const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    for (let i = 0; i < dailyMessages.length; i++) {
        const messageDateOnly = new Date(dailyMessages[i].date.getFullYear(), dailyMessages[i].date.getMonth(), dailyMessages[i].date.getDate());
        if (messageDateOnly.getTime() === todayDateOnly.getTime()) {
            return i; // Return the index of today's message
        }
    }

    return -1; // Return -1 if no message is found for today
}

// Add event listener to dynamically loaded Bible verses
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('bible-verse')) {
        const verse = event.target.getAttribute('data-verse');
        showBibleVerse(verse);
    }
});








function loadBibleVersesFiles(bookNames, callback) {
    let loadedScripts = 0; // Counter to check if all scripts have loaded

    bookNames.forEach(bookName => {
        const bookMapping = {
            "Genesis": "01Genesis",
            "Exodus": "02Exodus",
            "Matthew": "40Matthew",
            "Mark": "41Mark",
            // Map other books here
        };

        const scriptFile = `${bookMapping[bookName]}.js`; // Get the corresponding file
        const script = document.createElement('script');
        script.src = scriptFile;
        script.onload = function() {
            loadedScripts++;
            if (loadedScripts === bookNames.length) {
                callback(); // Call the callback once all files are loaded
            }
        };
        document.head.appendChild(script); // Load the script dynamically
    });
}

loadBibleVersesFiles(["Genesis", "Exodus" , "Matthew" , "Mark"], function() {
    // Now get the verses once all scripts have loaded
    const verseText = getBibleVerse(verse); // Example usage
});





// Function to show the Bible verse in a modal
function showBibleVerse(verse) {
    const verseText = getBibleVerse(verse);
    bibleVerseContent.innerHTML = verseText || '<p>Verse not found</p>'; // Render HTML, not plain text
    bibleVerseModal.style.display = 'block'; // Show the verse modal
    blurLayer.style.display = 'block'; // Show the blur layer
}

// Function to get the Bible verse or verses from the verse bank
function getBibleVerse(verse) {
    const parts = verse.split(/[,:-]/); // Split by colon, comma, or hyphen
    const bookChapter = parts[0].trim(); // Get the book and chapter
    let versesText = `<h3 class="bookChapter">${bookChapter}</h3>`; // Add book and chapter as heading

    // Check for ranges or multiple verses
    if (verse.includes('-')) {
        // Verse range like "Genesis 1:1-3"
        const startVerse = parseInt(parts[1].trim());
        const endVerse = parseInt(parts[2].trim());

        for (let i = startVerse; i <= endVerse; i++) {
            const verseKey = `${bookChapter}:${i}`;
            versesText += `<p><strong>${i}</strong> ${getVerseText(verseKey)}</p>`; // Append each verse with its number
        }
    } else if (verse.includes(',')) {
        // Multiple verses like "Genesis 1:1,4"
        for (let i = 1; i < parts.length; i++) {
            const verseNumber = parts[i].trim();
            const verseKey = `${bookChapter}:${verseNumber}`;
            versesText += `<p><strong>${verseNumber}</strong> ${getVerseText(verseKey)}</p>`; // Append each verse with its number
        }
    } else {
        // Single verse like "Genesis 1:1"
        const verseNumber = parts[1].trim();
        const verseKey = `${bookChapter}:${verseNumber}`;
        versesText += `<p><strong>${verseNumber}</strong> ${getVerseText(verseKey)}</p>`; // Add the single verse with its number
    }

    return versesText || '<p>Verse not available</p>';
}

// Helper function to get a single verse from the verse bank
function getVerseText(verseKey) {
    return (
        bibleVerses1[verseKey] || 
        bibleVerses2[verseKey] || 
        bibleVerses40[verseKey] || 
        bibleVerses41[verseKey] ||
        bibleVerses42[verseKey] ||
        bibleVerses43[verseKey] ||
    
        bibleVerses48[verseKey] ||
        bibleVerses49[verseKey] ||
        bibleVerses50[verseKey] ||
    
        bibleVerses65[verseKey] ||
        `Verse ${verseKey.split(':')[1]}: verse not available`
    );
}

// Event listeners for the Next and Previous buttons
nextButton.onclick = function() {
    if (currentIndex < dailyMessages.length - 1) {
        currentIndex++; // Move to the next message
        displayMessage(currentIndex); // Display the new message
    }
};

prevButton.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--; // Move to the previous message
        displayMessage(currentIndex); // Display the new message
    }
};