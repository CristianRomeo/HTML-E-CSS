const startButton = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-question');
let score = 0;
let questionIndex = 0;

document.getElementById('go-to-quiz').addEventListener('click', function () {
    // Scorri fino al bottone del quiz
    document.getElementById('start-quiz').scrollIntoView({ behavior: "smooth" });
});

// Domande del quiz
const questions = [
    {
        question: 'What is Gamification?',
        answers: [
            { text: 'A game for children', correct: false },
            { text: 'Gamification is the use of game design elements in non-game contexts', correct: true },
            { text: 'A type of computer programming', correct: false }
        ]
    },
    {
        question: 'Which of the following is an example of Gamification?',
        answers: [
            { text: 'A loyalty points system in a retail store', correct: true },
            { text: 'A video game', correct: false },
            { text: 'A smartphone app with a to-do list', correct: false }
        ]
    },
    // Aggiungi altre domande qui
];

// Funzione per iniziare il quiz
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';  // Nasconde il pulsante Start
    quizContainer.style.display = 'block';  // Mostra il contenitore del quiz
    loadQuestion();  // Carica la prima domanda
});

// Funzione per caricare una nuova domanda
function loadQuestion() {
    const question = questions[questionIndex];
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;

    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index].text;
        button.dataset.correct = question.answers[index].correct;
        button.disabled = false;  // Riabilita i pulsanti per la nuova domanda
    });

    nextButton.style.display = 'none';  // Nasconde il pulsante "Next Question" all'inizio
}

// Gestire la selezione di una risposta
function handleAnswerClick(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    // Disabilita tutti i pulsanti dopo la risposta
    const allButtons = document.querySelectorAll('.answer');
    allButtons.forEach(button => button.disabled = true);

    if (isCorrect) {
        score++;  // Incrementa il punteggio se la risposta è corretta
    }

    // Mostra il punteggio attuale
    scoreElement.textContent = `Score: ${score}`;

    // Mostra il pulsante "Next Question"
    nextButton.style.display = 'inline-block';
}

// Aggiungere l'evento per le risposte
const answerButtons = document.querySelectorAll('.answer');
answerButtons.forEach(button => {
    button.addEventListener('click', handleAnswerClick);
});

// Passa alla domanda successiva
nextButton.addEventListener('click', () => {
    questionIndex++;

    if (questionIndex < questions.length) {
        loadQuestion();  // Carica la prossima domanda
    } else {
        showFinalScore();  // Quando il quiz è finito, mostra il punteggio finale
    }
});

// Mostra il punteggio finale
function showFinalScore() {
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your final score is: ${score} / ${questions.length}</p>
        <button onclick="resetQuiz()">Restart Quiz</button>
    `;
}

// Reset del quiz
function resetQuiz() {
    score = 0;
    questionIndex = 0;
    scoreElement.textContent = `Score: 0`;
    startButton.style.display = 'inline-block';  // Mostra il pulsante Start
    quizContainer.style.display = 'none';  // Nasconde il contenitore del quiz
    location.reload();
}


document.getElementById("reveal-logos").addEventListener("click", function () {
    const logosNames = document.getElementById("logos-names");
    const button = document.getElementById("reveal-logos");

    if (logosNames.style.display === "none" || logosNames.style.display === "") {
        logosNames.style.display = "block";
        button.textContent = "Hide logo's names";
    } else {
        logosNames.style.display = "none";
        button.textContent = "Reveal logo's names";
    }
});


