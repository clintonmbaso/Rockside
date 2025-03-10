// Import stories from separate files
import story1 from './churchManual/story1.js';
import story2 from './churchManual/story2.js';
import story3 from './churchManual/story3.js';
import story4 from './churchManual/story4.js';
import story5 from './churchManual/story5.js';
import story6 from './churchManual/story6.js';
import story7 from './churchManual/story7.js';
import story8 from './churchManual/story8.js';
import story9 from './churchManual/story9.js';
import story10 from './churchManual/story10.js';
import story11 from './churchManual/story11.js';
import story12 from './churchManual/story12.js';
import story13 from './churchManual/story13.js';
import story14 from './churchManual/story14.js';
import story15 from './churchManual/story15.js';
// Continue importing up to story26.js

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

    // Update the story part with HTML formatting
    document.getElementById('story-part').innerHTML = `
        <div class="story-part">
            <p>${part.text}</p>
        </div>
    `;

    // Hide the questions modal by default
    document.getElementById('question-modal').style.display = "none";

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

// Show the questions for the current part in a modal
function showQuestions() {
    const part = currentStory.parts[currentPartIndex];
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = ''; // Clear previous questions

    part.questions.forEach((questionObj, index) => {
        // Shuffle the options before displaying them
        shuffleArray(questionObj.options);

        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${questionObj.question}</p>`;
        
        // Show hint if available
        if (questionObj.hint) {
            const hintDiv = document.createElement('p');
            hintDiv.innerHTML = `<em>Hint: ${questionObj.hint}</em>`;
            questionDiv.appendChild(hintDiv);
        }

        // Create radio buttons for each option
        questionObj.options.forEach(option => {
            const optionLabel = document.createElement('label');
            optionLabel.style.display = 'block'; // Ensure options are displayed vertically
            optionLabel.innerHTML = `<input type="radio" name="q${index}" value="${option.isCorrect}"> ${option.text}`;
            questionDiv.appendChild(optionLabel);
        });

        questionsContainer.appendChild(questionDiv);
    });

    // Add the submit button
    const submitButton = document.createElement('button');
    submitButton.innerText = "Submit Answers";
    submitButton.addEventListener('click', submitAnswers);
    questionsContainer.appendChild(submitButton);

    document.getElementById('question-modal').style.display = "block";
}
// Close the questions modal
function closeQuestions() {
    document.getElementById('question-modal').style.display = "none";
}

// Submit answers and provide feedback
// Close the question modal and open feedback modal with results
function submitAnswers() {
    const part = currentStory.parts[currentPartIndex];
    let correctCount = 0;
    let totalQuestions = part.questions.length;

    part.questions.forEach((questionObj, questionIndex) => {
        const selectedOption = document.querySelector(`input[name="q${questionIndex}"]:checked`);
        if (selectedOption && selectedOption.value === "true") {
            correctCount++;
        }
    });

    // Calculate percentage and provide feedback
    const percentage = (correctCount / totalQuestions) * 100;
    const marksObtained = `${correctCount} / ${totalQuestions}`;

    // Prepare feedback comment based on percentage
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

    // Close the question modal
    document.getElementById('question-modal').style.display = "none";

    // Display feedback modal
    document.getElementById('feedback-modals').style.display = "block";

    // Update feedback info in the modal
    document.getElementById('score-percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('marks-obtained').innerText = `Marks: ${marksObtained}`;
    document.getElementById('comment').innerText = comment;

    // Render the donut chart
    renderChart(correctCount, totalQuestions - correctCount);
}

// Function to render the donut chart
function renderChart(correctCount, incorrectCount) {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correctCount, incorrectCount],
                backgroundColor: ['#4caf50', '#f44336'], // Green for correct, red for incorrect
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
            case 'story13':
                loadStory(story13);
                break;
            case 'story14':
                loadStory(story14);
                break;
            case 'story15':
                loadStory(story15);
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