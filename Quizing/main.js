document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("quiz-modal");
    const closeBtn = document.querySelector(".close");
    const quizContainer = document.getElementById("quiz-container");

    // Event listener for honour links
    const links = document.querySelectorAll(".honour-link");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const honourName = this.getAttribute("data-honour");
            console.log(`Selected honour: ${honourName}`);  // Debugging log
            loadHonourQuestions(honourName);
        });
    });

    // Event listener for close button
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Event listener to close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Function to load the correct questions based on the selected honour
    function loadHonourQuestions(honour) {
    let questions;

    // Church Heritage
    if (honour === 'chSection01') {
        questions = chSection01;
    } else if (honour === 'chSection02') {
        questions = chSection02;
    } else if (honour === 'chSection03') {
        questions = chSection03;
    } else if (honour === 'chSection04') {
        questions = chSection04;
    } else if (honour === 'chSection05') {
        questions = chSection05;
    } else if (honour === 'chSection06') {
        questions = chSection06;
    } else if (honour === 'chSection07') {
        questions = chSection07;
    } else if (honour === 'chSection08') {
        questions = chSection08;
    } else if (honour === 'chSection09') {
        questions = chSection09;
    } else if (honour === 'chSection10') {
        questions = chSection10;
    } else if (honour === 'chSection11') {
        questions = chSection11;
    } else if (honour === 'chSection12') {
        questions = chSection12;
    } else if (honour === 'chSection13') {
        questions = chSection13;
    } else if (honour === 'chSection14') {
        questions = chSection14;
        
        // Bible Truth
    } else if (honour === 'btSection01') {
        questions = btSection01;
    } else if (honour === 'btSection02') {
        questions = btSection02;
    } else if (honour === 'btSection03') {
        questions = btSection03;
    } else if (honour === 'btSection04') {
        questions = btSection04;
    } else if (honour === 'btSection05') {
        questions = btSection05;
    } else if (honour === 'btSection06') {
        questions = btSection06;
    } else if (honour === 'btSection07') {
        questions = btSection07;
    } else if (honour === 'btSection08') {
        questions = btSection08;
    } else if (honour === 'btSection09') {
        questions = btSection09;
    } else if (honour === 'btSection10') {
        questions = btSection10;
    } else if (honour === 'btSection11') {
        questions = btSection11;
    } else if (honour === 'btSection12') {
        questions = btSection12;
        
        // Adventism in Zambia
    } else if (honour === 'azSection01') {
        questions = azSection01;
    } else if (honour === 'azSection02') {
        questions = azSection02;
    } else if (honour === 'azSection03') {
        questions = azSection03;
    } else if (honour === 'azSection04') {
        questions = azSection04;
    } else if (honour === 'azSection05') {
        questions = azSection05;
    } else if (honour === 'azSection06') {
        questions = azSection06;
    } else if (honour === 'azSection07') {
        questions = azSection07;
    } else if (honour === 'azSection08') {
        questions = azSection08;
    } else if (honour === 'azSection09') {
        questions = azSection09;
    }  else if (honour === 'azSection10') {
        questions = azSection10;
    } else if (honour === 'azSection11') {
        questions = azSection11;
    } else if (honour === 'azSection12') {
        questions = azSection12;
    } else if (honour === 'azSection13') {
        questions = azSection13;
    } else if (honour === 'azSection14') {
        questions = azSection14;
    } else if (honour === 'azSection15') {
        questions = azSection15;
        
        // masterGuideHonours
    } else if (honour === 'mgHonours01') {
        questions = mgHonours01;
    } else if (honour === 'mgHonours02') {
        questions = mgHonours02;
    } else if (honour === 'mgHonours03') {
        questions = mgHonours03;
    } else if (honour === 'mgHonours04') {
        questions = mgHonours04;
    } else if (honour === 'mgHonours05') {
        questions = mgHonours05;
    } else if (honour === 'mgHonours06') {
        questions = mgHonours06;
    } else if (honour === 'mgHonours07') {
        questions = mgHonours07;
    } else if (honour === 'mgHonours08') {
        questions = mgHonours08;
    } else if (honour === 'mgHonours09') {
        questions = mgHonours09;
    } else if (honour === 'mgHonours10') {
        questions = mgHonours10;
    } else if (honour === 'mgHonours11') {
        questions = mgHonours11;
    }  else if (honour === 'mgHonours12') {
        questions = mgHonours12;
    } else if (honour === 'mgHonours13') {
        questions = mgHonours13;
    } else if (honour === 'mgHonours14') {
        questions = mgHonours14;
    } else if (honour === 'mgHonours15') {
        questions = mgHonours15;
    } else if (honour === 'mgHonours16') {
        questions = mgHonours16;
    } else if (honour === 'mgHonours17') {
        questions = mgHonours17;
    } else if (honour === 'mgHonours18') {
        questions = mgHonours18;
    } else if (honour === 'mgHonours19') {
        questions = mgHonours19;
    } else if (honour === 'mgHonours20') {
        questions = mgHonours20;
    } else if (honour === 'mgHonours21') {
        questions = mgHonours21;
    } else if (honour === 'mgHonours22') {
        questions = mgHonours22;
    } else if (honour === 'mgHonours23') {
        questions = mgHonours23;
    } else if (honour === 'mgHonours24') {
        questions = mgHonours24;
    } else if (honour === 'mgHonours25') {
        questions = mgHonours25;
    }  else if (honour === 'mgHonours26') {
        questions = mgHonours26;
    }  else if (honour === 'mgHonours27') {
        questions = mgHonours27;
        
        // sylHonours
    } else if (honour === 'mgHonours02') {
        questions = mgHonours02;
    } else if (honour === 'mgHonours18') {
        questions = mgHonours18;
    } else if (honour === 'sylHonours03') {
        questions = sylHonours03;
    } else if (honour === 'mgHonours07') {
        questions = mgHonours07;
    } else if (honour === 'sylHonours05') {
        questions = sylHonours05;
    } else if (honour === 'sylHonours06') {
        questions = sylHonours06;
        
        // friendHonours

        
    }  else {
        console.error(`Unknown honour: ${honour}`);  // Debugging log
        return;
    }

        console.log(`Loaded questions for: ${honour}`, questions);  // Debugging log
        startQuiz(questions);
        modal.style.display = "block";
    }

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to start the quiz with the selected honour's questions
    function startQuiz(questions) {
        if (!questions || questions.length === 0) {
            console.error('No questions available');  // Debugging log
            return;
        }

        // Randomly select 10 questions
        const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
        console.log('Selected questions:', selectedQuestions);  // Debugging log

        // Shuffle options for each question
        selectedQuestions.forEach(question => {
            shuffleArray(question.options);
        });

        let output = '';
        selectedQuestions.forEach((q, i) => {
            output += `
                <div class="question">
                    <p>${i + 1}. ${q.question}</p>
                    ${q.options.map((option, index) =>
                        `<label><input type="radio" name="q${i}" value="${index}">${option.text}</label>`).join('')}
                    ${q.hint ? `` : ''}
                </div>
            `;
        });
        output += `<button id="submit-quiz">Submit Quiz</button>`;
        quizContainer.innerHTML = output;

        // Event listener for the submit button
        document.getElementById("submit-quiz").addEventListener("click", function() {
            gradeQuiz(selectedQuestions);
        });
    }

    // Function to grade the quiz
    function gradeQuiz(questions) {
        let score = 0;
        const userAnswers = [];

        questions.forEach((q, i) => {
            const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
            if (selectedOption) {
                const selectedIndex = parseInt(selectedOption.value);
                const isCorrect = q.options[selectedIndex].isCorrect;
                userAnswers.push({
                    question: q.question,
                    selectedAnswer: q.options[selectedIndex].text,
                    isCorrect: isCorrect,
                    correctAnswer: q.options.find(option => option.isCorrect).text
                });
                if (isCorrect) {
                    score++;
                }
            } else {
                userAnswers.push({
                    question: q.question,
                    selectedAnswer: 'Not answered',
                    isCorrect: false,
                    correctAnswer: q.options.find(option => option.isCorrect).text
                });
            }
        });

        // Save results and answers to local storage
        const quizResults = {
            score: score,
            total: questions.length,
            userAnswers: userAnswers
        };
        localStorage.setItem('quizResults', JSON.stringify(quizResults));

        showResults(score, questions.length);
    }

    // Function to show the quiz results
    function showResults(score, total) {
        const percentage = (score / total) * 100;
        let comment = '';

        if (percentage === 100) {
            comment = "Excellent! You got all answers correct!";
        } else if (percentage >= 75) {
            comment = "Great job! You scored really well!";
        } else if (percentage >= 50) {
            comment = "Good effort! Keep practicing.";
        } else {
            comment = "Keep trying! You'll get better with practice.";
        }

        const resultHTML = `
            <div class="results">
                <h2 class="score">Your Score: ${score} / ${total}</h2>
                <canvas id="resultChart"></canvas>
                <p class="percentage">${Math.round(percentage)}%</p>
                <p>${comment}</p>
                <a href="review.html" id="review-quiz">Review Quiz</a>
            </div>
        `;
        quizContainer.innerHTML = resultHTML;
        displayChart(score, total);
    }

    // Function to display the result as a donut chart
    function displayChart(score, total) {
        const ctx = document.getElementById('resultChart').getContext('2d');
        const percentage = (score / total) * 100;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    data: [score, total - score],
                    backgroundColor: ['#4caf50', '#f44336']
                }]
            },
            options: {
                cutoutPercentage: 90, // Adjust the size of the donut hole
                plugins: {
                    tooltip: {
                        enabled: false // Disable default tooltips
                    }
                }
            }
        });
    }
});