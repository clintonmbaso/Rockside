// Variables to store hymn data from different languages
let currentHymn = 0;
let currentLanguage = 'english';
const hymns = {
    english: hymnEnglish,
    tonga: hymnTonga,
    lozi: hymnLozi,
    chewa: hymnChewa,
    bemba: hymnBemba
};

// Open modal and load the first hymn
document.getElementById('openHymnModal').addEventListener('click', openModal);

function openModal() {
    const modal = document.getElementById('hymnModal');
    modal.style.display = 'flex'; // Open modal
    loadHymn(currentHymn); // Load the first hymn (index 0)
}

// Close modal
document.querySelector('.close').addEventListener('click', closeModal);

// Close modal if user clicks outside of modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('hymnModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function closeModal() {
    const modal = document.getElementById('hymnModal');
    modal.style.display = 'none'; // Close modal
}

// Load hymn based on current hymn number and language
function loadHymn(hymnNumber) {
    const hymnLyrics = document.getElementById('hymnLyrics');
    const hymnTitle = document.getElementById('hymnTitle');
    
    const selectedHymn = hymns[currentLanguage][hymnNumber];
    hymnTitle.textContent = selectedHymn.title;
    
    // Replace newline characters with <br> for proper formatting
    hymnLyrics.innerHTML = selectedHymn.lyrics.trim().replace(/\n\s*\n/g, '</p><p>').replace(/\n/g, '<br>');

    // Ensure the text is wrapped in <p> tags
    hymnLyrics.innerHTML = `<p>${hymnLyrics.innerHTML}</p>`;
}

// Switch language when buttons are clicked
document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', (e) => {
        currentLanguage = e.target.dataset.lang; // Switch the language
        loadHymn(currentHymn); // Reload the current hymn in the selected language
        loadHymnTitles(); // Reload the dropdown with titles in the new language
    });
});

// Dial pad functionality for choosing hymn number
document.getElementById('toggleDialPad').addEventListener('click', () => {
    document.getElementById('dialPad').classList.toggle('hidden'); // Show/Hide dial pad
});

// Capture hymn number input from the dial pad
let selectedHymnNumber = '';
document.querySelectorAll('.dial-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        selectedHymnNumber += e.target.textContent; // Append number to the selected hymn number
    });
});

// Load the selected hymn when the "Load Hymn" button is clicked
document.getElementById('loadHymnByNumber').addEventListener('click', () => {
    const hymnNumber = parseInt(selectedHymnNumber, 10);
    if (!isNaN(hymnNumber) && hymnNumber >= 0 && hymnNumber < hymns[currentLanguage].length) {
        currentHymn = hymnNumber;
        loadHymn(hymnNumber); // Load the hymn
        selectedHymnNumber = ''; // Reset the selected hymn number
    } else {
        alert('Invalid hymn number');
    }
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    searchHymns(searchQuery);
});

function searchHymns(query) {
    const hymnTitle = document.getElementById('hymnTitle');
    const hymnLyrics = document.getElementById('hymnLyrics');

    // Loop through all hymns in all languages
    for (const lang in hymns) {
        for (let i = 0; i < hymns[lang].length; i++) {
            const hymn = hymns[lang][i];
            if (hymn.title.toLowerCase().includes(query) || hymn.lyrics.toLowerCase().includes(query)) {
                currentLanguage = lang; // Set the language to the one that matches the query
                currentHymn = i; // Set the hymn number
                loadHymn(currentHymn); // Load the hymn
                return;
            }
        }
    }

    hymnTitle.textContent = 'No hymns found';
    hymnLyrics.textContent = '';
}

// Populate drop-down with hymn titles for search by title
function loadHymnTitles() {
    const dropdown = document.getElementById("hymnDropdown");
    dropdown.innerHTML = ''; // Clear existing options
    
    hymns[currentLanguage].forEach((hymn, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = hymn.title;
        dropdown.appendChild(option);
    });
}

// Load the default (English) hymn titles on page load
window.onload = function() {
    loadHymnTitles();
}

// When a user selects a hymn from the dropdown
document.getElementById("hymnDropdown").addEventListener("change", function() {
    const selectedHymnNumber = this.value;
    currentHymn = parseInt(selectedHymnNumber); // Set current hymn number
    loadHymn(currentHymn); // Load the hymn based on dropdown selection
});