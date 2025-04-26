// Import stories from separate files
import story1 from './stories/story1.js';
import story2 from './stories/story2.js';
import story3 from './stories/story3.js';
import story4 from './stories/story4.js';
import story5 from './stories/story5.js';
import story6 from './stories/story6.js';
import story7 from './stories/story7.js';
import story8 from './stories/story8.js';
import story9 from './stories/story9.js';
import story10 from './stories/story10.js';
import story11 from './stories/story11.js';
import story12 from './stories/story12.js';

let currentStory = null;
let currentPartIndex = 0;

// Load a selected story
function loadStory(story) {
    currentStory = story;
    currentPartIndex = 0;
    displayPart();
}

// Display the current part of the story
function displayPart() {
    const part = currentStory.parts[currentPartIndex];

    
    // Update story title
    document.getElementById('story-title').innerText = currentStory.title;
    
    
    
    
    
document.getElementById('story-part').innerHTML = `
    <div class="story-part">
        ${part.text}
        <audio id="storyAudio" class="audio-container" src="${encodeURI(part.audioPath)}">
            Your browser does not support the audio element.
        </audio>
        <button id="playPauseBtn" class="play-pause-btn">▶️</button>
    </div>
`;

// Ensure script runs after elements are added
setTimeout(() => {
    const storyAudio = document.getElementById('storyAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    const previousButton = document.getElementById('previous-button');
    
    const nextButton = document.getElementById('next-button');
    
    const navLinks = document.getElementById('link');
    

    // Check if background music exists globally
    if (!window.backgroundMusic) {
        window.backgroundMusic = new Audio('stories/audio/whispering.mp3'); // Replace with actual path
        window.backgroundMusic.loop = true;
        window.backgroundMusic.volume = 0.1;
    }

    // Function to fade audio smoothly
    function fadeAudio(audioElement, targetVolume, duration) {
        let startVolume = audioElement.volume;
        let steps = 10;
        let stepTime = duration / steps;
        let stepSize = (targetVolume - startVolume) / steps;

        let currentStep = 0;
        let fadeInterval = setInterval(() => {
            let newVolume = audioElement.volume + stepSize;
            audioElement.volume = Math.max(0, Math.min(1, newVolume));

            if (++currentStep >= steps) {
                clearInterval(fadeInterval);
                audioElement.volume = targetVolume;
            }
        }, stepTime);
    }

    // Play/Pause story and background music
    playPauseBtn.addEventListener('click', function () {
        if (storyAudio.paused) {
            if (window.backgroundMusic.paused) {
                window.backgroundMusic.play();
                setTimeout(() => fadeAudio(window.backgroundMusic, 0.1, 2000), 5000);
            } else {
                fadeAudio(window.backgroundMusic, 0.1, 1000);
            }

            storyAudio.play();
            this.textContent = '⏸️';
        } else {
            storyAudio.pause();
            window.backgroundMusic.pause();
            this.textContent = '▶️';
        }
    });

    // Stop background music completely when navigating
    function stopBackgroundMusic() {
        if (window.backgroundMusic) {
            window.backgroundMusic.pause();
            window.backgroundMusic.currentTime = 0;
            window.backgroundMusic = null; // Remove reference to prevent unintended restarts
        }
    }

    // Attach event listeners to navigation buttons
    previousButton.addEventListener('click', stopBackgroundMusic);
    
    nextButton.addEventListener('click', stopBackgroundMusic);
    
    navLinks.addEventListener('click', stopBackgroundMusic);

    // When story audio ends
    storyAudio.onended = function () {
        fadeAudio(window.backgroundMusic, 0.8, 2000);
        setTimeout(() => fadeAudio(window.backgroundMusic, 0, 3000), 5000);
    };
}, 0);

    
    
    
    // Hide the questions modal by default
    document.getElementById('question-modal').style.display = "none";
    document.getElementById('children-modalz').style.display = "none";

    // Update navigation buttons
    document.getElementById('next-button').disabled = currentPartIndex >= currentStory.parts.length - 1;
    document.getElementById('previous-button').disabled = currentPartIndex === 0;
}

// Show the next part of the story
function showNextPart() {
    if (currentPartIndex < currentStory.parts.length - 1) {
        currentPartIndex++;
        displayPart();
    }
}

// Show the previous part of the story
function showPreviousPart() {
    if (currentPartIndex > 0) {
        currentPartIndex--;
        displayPart();
    }
}

// Fisher-Yates Shuffle to randomize the order of options
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



let selectedQuestions = []; // Declare globally
let resultsChartInstance = null;


function showQuestions() {
    const part = currentStory.parts[currentPartIndex];
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';

    const randomQuestions = [...part.questions];
    shuffleArray(randomQuestions);
    selectedQuestions = randomQuestions.slice(0, 10);

    // Save selected questions to localStorage (without user answers for now)
    localStorage.setItem('reviewQuestions', JSON.stringify(selectedQuestions));

    selectedQuestions.forEach((questionObj, index) => {
        shuffleArray(questionObj.options);

        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${questionObj.question}</p>`;

        questionObj.options.forEach(option => {
            const optionLabel = document.createElement('label');
            optionLabel.style.display = 'block';
            optionLabel.innerHTML = `<input type="radio" name="q${index}" value="${option.text}" data-correct="${option.isCorrect}"> ${option.text}`;
            questionDiv.appendChild(optionLabel);
        });

        questionsContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
submitButton.innerText = "Submit Answers";
submitButton.className = "submit-button";
submitButton.addEventListener('click', submitAnswers);
questionsContainer.appendChild(submitButton);
    
    
    document.getElementById('question-modal').style.display = "block";
    document.getElementById('children-modalz').style.display = "block";
}

// Close the questions modal
function closeQuestions() {
    document.getElementById('question-modal').style.display = "none";
}
function closeChildren() {
    document.getElementById('children-modalz').style.display = "none";
}

// Close the question modal and open feedback modal with results
function submitAnswers() {
    let correctCount = 0;
    let totalQuestions = selectedQuestions.length;
    let userAnswers = [];

    selectedQuestions.forEach((questionObj, questionIndex) => {
        const selectedOption = document.querySelector(`input[name="q${questionIndex}"]:checked`);
        const userAnswerText = selectedOption ? selectedOption.value : null;
        const isCorrect = selectedOption ? selectedOption.dataset.correct === "true" : false;

        if (isCorrect) {
            correctCount++;
        }

        // Store user response
        userAnswers.push({
            question: questionObj.question,
            selectedAnswer: userAnswerText,
            isCorrect: isCorrect,
            correctAnswer: questionObj.options.find(opt => opt.isCorrect).text,
            options: questionObj.options
        });
    });

    // Save user answers to localStorage
    localStorage.setItem('reviewAnswers', JSON.stringify(userAnswers));

    const percentage = (correctCount / totalQuestions) * 100;
    const marksObtained = `${correctCount} / ${totalQuestions}`;

    let comment = '';
    if (percentage === 100) {
        comment = "Excellent job! You got all questions correct!";
    } else if (percentage >= 75) {
        comment = "Great job! You answered most questions correctly.";
    } else if (percentage >= 50) {
        comment = "Good effort! You might want to review a few concepts in the Lesson.";
    } else {
        comment = "Keep trying! Go through the lesson and try again.";
    }

    document.getElementById('question-modal').style.display = "none";
    document.getElementById('children-modalz').style.display = "none";

    document.getElementById('feedback-modals').style.display = "block";

    document.getElementById('score-percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('marks-obtained').innerText = `Marks: ${marksObtained}`;
    document.getElementById('comment').innerText = comment;

    renderChart(correctCount, totalQuestions - correctCount);
}





// Function to render the donut chart
function renderChart(correctCount, incorrectCount) {
    const ctx = document.getElementById('resultsChart').getContext('2d');

    // Destroy the previous chart if it exists
    if (resultsChartInstance) {
        resultsChartInstance.destroy();
    }

    // Create a new chart
    resultsChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correctCount, incorrectCount],
                backgroundColor: ['#4caf50', '#f44336'],
                hoverBackgroundColor: ['#66bb6a', '#ef5350'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
        }
    });
}

// Close the feedback modal
document.getElementById('close-feedback-modals').addEventListener('click', function() {
    document.getElementById('feedback-modals').style.display = "none";
});





// Load different stories based on user selection
const storyLinks = document.querySelectorAll('.story-link');

storyLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const selectedStory = this.getAttribute('data-story'); // Get the story identifier

        switch (selectedStory) {
            case 'story1':
                loadStory(story1);
                break;
            case 'story2':
                loadStory(story2);
                break;
            case 'story3':
                loadStory(story3);
                break;
            case 'story4':
                loadStory(story4);
                break;
            case 'story5':
                loadStory(story5);
                break;
            case 'story6':
                loadStory(story6);
                break;
            case 'story7':
                loadStory(story7);
                break;
            case 'story8':
                loadStory(story8);
                break;
            case 'story9':
                loadStory(story9);
                break;
            case 'story10':
                loadStory(story10);
                break;
            case 'story11':
                loadStory(story11);
                break;
            case 'story12':
                loadStory(story12);
                break;

            // Add cases for other stories up to story26
            default:
                break;
        }
    });
});

// Event listeners for navigation and question modal
document.getElementById('next-button').addEventListener('click', showNextPart);
document.getElementById('previous-button').addEventListener('click', showPreviousPart);
document.getElementById('view-questions').addEventListener('click', showQuestions);
document.getElementById('close-modal').addEventListener('click', closeQuestions);

// Load the first story by default
loadStory(story1);