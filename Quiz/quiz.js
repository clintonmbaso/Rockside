        let currentQuestionIndex = 0;
        const numQuestions = 10; // Total number of questions
        let timerInterval;
        let score = 0;

function startQuiz() {
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    church = document.getElementById('church').value;
   ministry = document.getElementById('ministry').value; // Get ministry value
    phone = document.getElementById('phone').value; // Get phone value

  
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    // Additional validation for email if needed

    document.getElementById('email-form').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    quizStarted = true;
    initializeQuiz();
    startTimer();

    const timerSlider = document.getElementById('timer-slider');

    noUiSlider.create(timerSlider, {
        start: 100, // Initial value
        range: {
            'min': 0,
            'max': 100
        },
        format: {
            to: function (value) {
                return value + '%';
            },
            from: function (value) {
                return value.replace('%', '');
            }
        },
        tooltips: false, // Show tooltips
        pips: { mode: 'values', values: [0, 25, 50, 75, 100], density: 3 } // Customize pips (optional)
    });
}

let shuffledQuestions = []; // To store questions with shuffled options

function initializeQuiz() {
    // Shuffle questions
    shuffleArray(questions);

    // Shuffle options for each question and store them
    shuffledQuestions = questions.map(question => {
        return {
            ...question,
            options: shuffleArray([...question.options])
        };
    });

    // Reset state
    currentQuestionIndex = 0;
    score = 0;

    // Render all questions
    const quizContainer = document.getElementById('question-container');
    quizContainer.innerHTML = '';

    shuffledQuestions.forEach((question, index) => {
        // Create a container for each question
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.style.display = index === 0 ? 'block' : 'none'; // Show only the first question

        questionDiv.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            <ul>
                ${question.options.map((opt, i) => `<li onclick="checkAnswer(${index}, ${i}, ${opt.isCorrect})">${opt.text}</li>`).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionDiv);
    });

    // Show the first question
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const questions = document.querySelectorAll('#question-container .question');
    
    questions.forEach((questionDiv, i) => {
        questionDiv.style.display = i === index ? 'block' : 'none';
    });

    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');

            if (index > 0) {
                prevBtn.style.display = 'inline-block';
            } else {
                prevBtn.style.display = 'none';
            }

            if (index < numQuestions - 1) {
                nextBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'none';
                document.getElementById('submit-btn').style.display = 'inline-block';
            }
        }

        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion(currentQuestionIndex);
            }
        }

        function nextQuestion() {
            if (currentQuestionIndex < numQuestions - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            }
        }

function checkAnswer(questionIndex, selectedOptionIndex, isCorrect) {
    const selectedOption = document.querySelectorAll('#question-container .question')[questionIndex].querySelectorAll('li')[selectedOptionIndex];

    // Check if the option has already been answered
    if (!selectedOption.classList.contains('correct') && !selectedOption.classList.contains('incorrect')) {
        if (isCorrect) {
            selectedOption.classList.add('correct');
            score++; // Increment score only for correct answers
        } else {
            selectedOption.classList.add('incorrect');
            // Find the correct option index in the original options array
            const correctOptionIndex = shuffledQuestions[questionIndex].options.findIndex(option => option.isCorrect);
            // Highlight the correct option in the shuffled list
            const shuffledOptions = document.querySelectorAll('#question-container .question')[questionIndex].querySelectorAll('li');
            shuffledOptions[correctOptionIndex].classList.add('correct');
        }

        // Disable all options after answering
        const allOptions = document.querySelectorAll('#question-container .question')[questionIndex].querySelectorAll('li');
        allOptions.forEach(option => {
            option.style.pointerEvents = 'none';
        });
    }
}

        function startTimer() {
    let totalTime = numQuestions * 30; // Total time for the quiz in seconds
    let timerDisplay = document.getElementById('timer-display');
    let timerSlider = document.getElementById('timer-slider');
    updateSliderValue(totalTime, timerSlider); // Update slider value initially

    timerInterval = setInterval(() => {
        totalTime--;
        updateSliderValue(totalTime, timerSlider); // Update slider value
        timerDisplay.textContent = formatTime(totalTime);

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            submitQuiz(); // Call the submitQuiz function when the timer reaches zero
        }
    }, 1000);
}

        function updateSliderValue(totalTime, slider) {
    const percentage = (totalTime / (numQuestions * 30)) * 100;
    slider.value = percentage;
}

let hintCount = 0; // Variable to keep track of hint usage

function showHint(currentQuestion) {
    const hint = currentQuestion.hint;
    const hintButton = document.getElementById('hint-button');

    if (hint && hintCount < 3) {
        const tooltip = document.createElement('div');
        tooltip.textContent = hint;
        tooltip.classList.add('hint-tooltip');
        document.body.appendChild(tooltip);
        setTimeout(() => {
            tooltip.remove();
        }, 7000); // Adjust the timeout as needed

        hintCount++;
        if (hintCount === 3) {
            hintButton.disabled = true;
            hintButton.classList.add('hint-disabled');
        }
    } else {
        window.alert("No hint available for this question or maximum hint usage reached.");
    }
}

        function submitQuiz() {
    clearInterval(timerInterval);
    const percentage = (score / numQuestions) * 100;
    let comment;

    if (percentage >= 80) {
        comment = "Excellent! You scored very well!";
    } else if (percentage >= 60) {
        comment = "Good job! You did quite well.";
    } else if (percentage >= 40) {
        comment = "Not bad! You're getting there.";
    } else {
        comment = "Keep practicing! You'll improve.";
    }

const resultText = `Thank you for participating in the mock exams ${name}\nYou have scored: ${score}/${numQuestions}.\n${comment}`;
            

    // Update percentage text in the SVG
    const percentageText = document.getElementById('percentage-text');
    percentageText.textContent = `${percentage.toFixed(2)}%`;

    // Animate the donut chart based on percentage
    const donutCircle = document.getElementById('donut-circle');
    const circumference = 2 * Math.PI * 80; // 2 * pi * radius
    const strokeDashOffset = circumference - (percentage / 100) * circumference;

    donutCircle.style.strokeDasharray = `${circumference}, ${circumference}`;
    donutCircle.style.strokeDashoffset = strokeDashOffset;

    // Send quiz results to PHP script using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        console.log("Ready state:", xhr.readyState);
        console.log("Status:", xhr.status);
        console.log("Response:", xhr.responseText);
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Email sent successfully
            alert("Quiz results sent successfully!");
            // Optionally, you can redirect the user to a thank you page or perform other actions here
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            // Failed to send email
            alert("Error sending quiz results. Please try again later.");
        }
    };
    xhr.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&church=" + encodeURIComponent(church) + "&score=" + score + "&totalQuestions=" + numQuestions);

    // Display quiz results in the result container
    const resultContainer = document.getElementById('result-text');
    resultContainer.textContent = resultText;
    resultContainer.style.whiteSpace = 'pre-line'; // Preserve newline characters
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('quiz').style.display = 'none'; // Hide the quiz container
}

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function formatTime(totalSeconds) {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

