// DOM Elements
const landingPage = document.getElementById('landingPage');
const presentationView = document.getElementById('presentationView');
const slideContainer = document.getElementById('slideContainer');
const presentationGrid = document.getElementById('presentationGrid');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const slideCounter = document.getElementById('slideCounter');
const toggleFullscreenBtn = document.getElementById('toggleFullscreen');
const exitPresentationBtn = document.getElementById('exitPresentation');
const currentDateElement = document.getElementById('currentDate');

// State variables
let currentSlideIndex = 0;
let isFullscreen = false;
let presentationStartTime = null;
let timerInterval = null;
let currentPresentationData = null;

// Initialize the application
function init() {
    // Set current date
    currentDateElement.textContent = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Load presentation cards
    loadPresentationCards();
    
    // Set up event listeners
    setupEventListeners();
}

// Load presentation cards for the landing page
function loadPresentationCards() {
    presentationGrid.innerHTML = '';
    
    // Show loading message if no presentations available
    if (availablePresentations.length === 0) {
        presentationGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
                <p>Loading presentations...</p>
            </div>
        `;
        return;
    }
    
    availablePresentations.forEach(presentation => {
        const card = document.createElement('div');
        card.className = 'presentation-card';
        card.innerHTML = `
            <div class="card-header">
                <h3>${presentation.title}</h3>
                <span>${presentation.category}</span>
            </div>
            <div class="card-content">
                <p>${presentation.description}</p>
                <div class="slide-count">
                    <i class="fas fa-layer-group"></i>
                    <span>${presentation.slideCount} slides</span>
                </div>
                <div class="slide-thumbnails">
                    ${generateThumbnails(presentation.slideCount)}
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="startPresentation(${presentation.id})">
                        <i class="fas fa-play"></i>
                        Start
                    </button>
                    <button class="btn btn-secondary" onclick="editPresentation(${presentation.id})">
                        <i class="fas fa-edit"></i>
                        Edit
                    </button>
                </div>
            </div>
        `;
        presentationGrid.appendChild(card);
    });
}

// Generate placeholder thumbnails for presentation cards
function generateThumbnails(count) {
    let thumbnails = '';
    const maxThumbnails = Math.min(count, 6);
    for (let i = 0; i < maxThumbnails; i++) {
        thumbnails += `<div class="slide-thumb">${i + 1}</div>`;
    }
    // Add placeholder for remaining slides
    if (count > 6) {
        thumbnails += `<div class="slide-thumb">+${count - 6}</div>`;
    }
    return thumbnails;
}

// Set up event listeners
function setupEventListeners() {
    // Navigation buttons
    prevSlideBtn.addEventListener('click', goToPreviousSlide);
    nextSlideBtn.addEventListener('click', goToNextSlide);
    
    // Fullscreen toggle
    toggleFullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Exit presentation
    exitPresentationBtn.addEventListener('click', exitPresentation);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
    
    // Fullscreen change event
    document.addEventListener('fullscreenchange', handleFullscreenChange);
}

// Start a presentation
function startPresentation(presentationId) {
    // Find the presentation data
    const presentation = availablePresentations.find(p => p.id === presentationId);
    if (!presentation || !presentation.data) {
        alert('Presentation not found!');
        return;
    }
    
    // Set current presentation data
    currentPresentationData = presentation.data;
    
    // Switch to presentation view
    landingPage.style.display = 'none';
    presentationView.style.display = 'flex';
    
    // Load slides
    loadSlides();
    
    // Start timer
    startTimer();
    
    // Set initial slide
    showSlide(0);
}

// Load slides into the presentation view
function loadSlides() {
    if (!currentPresentationData || !currentPresentationData.slides) {
        console.error('No presentation data available');
        return;
    }
    
    slideContainer.innerHTML = '';
    
    currentPresentationData.slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.id = `slide-${index}`;
        slideElement.innerHTML = slide.content;
        
        // Add presenter notes if available
        if (slide.notes) {
            const notesElement = document.createElement('div');
            notesElement.className = 'presenter-notes';
            notesElement.innerHTML = `<strong>Presenter Notes:</strong> ${slide.notes}`;
            slideElement.appendChild(notesElement);
        }
        
        slideContainer.appendChild(slideElement);
    });
}

// Show a specific slide
function showSlide(index) {
    if (!currentPresentationData || !currentPresentationData.slides) return;
    
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    // Validate index
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show the selected slide
    slides[index].classList.add('active');
    
    // Update slide counter
    slideCounter.textContent = `${index + 1} / ${slides.length}`;
    
    // Update navigation buttons
    prevSlideBtn.disabled = index === 0;
    nextSlideBtn.disabled = index === slides.length - 1;
    
    // Update current slide index
    currentSlideIndex = index;
    
    // Trigger animations
    triggerAnimations();
}

// Go to the next slide
function goToNextSlide() {
    if (currentPresentationData && currentSlideIndex < currentPresentationData.slides.length - 1) {
        showSlide(currentSlideIndex + 1);
    }
}

// Go to the previous slide
function goToPreviousSlide() {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    }
}

// Trigger animations for the current slide
function triggerAnimations() {
    const currentSlide = document.querySelector('.slide.active');
    if (!currentSlide) return;
    
    const animatedElements = currentSlide.querySelectorAll('.animate-in');
    
    animatedElements.forEach(element => {
        // Reset animation
        element.classList.remove('visible');
        
        // Get delay from data attribute or use default
        const delay = element.getAttribute('data-delay') || 0;
        
        // Trigger animation after delay
        setTimeout(() => {
            element.classList.add('visible');
        }, parseInt(delay));
    });
}

// Handle keyboard navigation
function handleKeyPress(event) {
    // Only handle keys when in presentation view
    if (presentationView.style.display === 'none') return;
    
    switch(event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
            goToNextSlide();
            break;
        case 'ArrowLeft':
            goToPreviousSlide();
            break;
        case 'Escape':
            if (isFullscreen) {
                toggleFullscreen();
            } else {
                exitPresentation();
            }
            break;
        case 'f':
        case 'F':
            if (event.ctrlKey || event.metaKey) {
                event.preventDefault();
                toggleFullscreen();
            }
            break;
        case 'Home':
            showSlide(0);
            break;
        case 'End':
            if (currentPresentationData) {
                showSlide(currentPresentationData.slides.length - 1);
            }
            break;
    }
}

// Toggle fullscreen mode
function toggleFullscreen() {
    if (!isFullscreen) {
        const container = document.querySelector('.presentation-container');
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Handle fullscreen change
function handleFullscreenChange() {
    isFullscreen = !!(document.fullscreenElement || 
                     document.webkitFullscreenElement || 
                     document.msFullscreenElement);
    
    // Update button text
    toggleFullscreenBtn.innerHTML = isFullscreen ? 
        '<i class="fas fa-compress"></i> Exit Fullscreen' : 
        '<i class="fas fa-expand"></i> Fullscreen';
}

// Exit presentation and return to landing page
function exitPresentation() {
    // Stop timer
    stopTimer();
    
    // Switch to landing page
    presentationView.style.display = 'none';
    landingPage.style.display = 'flex';
    
    // Reset slide index
    currentSlideIndex = 0;
    currentPresentationData = null;
}

// Start presentation timer
function startTimer() {
    presentationStartTime = new Date();
    
    // Update timer every second
    timerInterval = setInterval(updateTimer, 1000);
}

// Update presentation timer
function updateTimer() {
    if (!presentationStartTime) return;
    
    const now = new Date();
    const elapsed = Math.floor((now - presentationStartTime) / 1000);
    
    const hours = Math.floor(elapsed / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;
    
    // Format time as HH:MM:SS
    const timeString = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');
    
    // Update timer display
    let timerElement = document.querySelector('.timer');
    if (!timerElement) {
        timerElement = document.createElement('div');
        timerElement.className = 'timer';
        document.querySelector('.presentation-view').appendChild(timerElement);
    }
    
    timerElement.textContent = timeString;
}

// Stop presentation timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Remove timer display
    const timerElement = document.querySelector('.timer');
    if (timerElement) {
        timerElement.remove();
    }
}

// Edit presentation (placeholder function)
function editPresentation(id) {
    alert(`Editing presentation ${id}. This feature would open the presentation editor in a complete implementation.`);
}

// Refresh the presentation list (can be called after new presentations are loaded)
function refreshPresentationList() {
    loadPresentationCards();
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);