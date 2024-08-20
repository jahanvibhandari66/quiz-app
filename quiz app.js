function startQuiz() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('quizForm').style.display = 'block';
    document.getElementById('question1').classList.add('active');
}

function nextQuestion(currentQuestion) {
    var nextQuestion = currentQuestion + 1;
    document.getElementById('question' + currentQuestion).classList.remove('active');
    document.getElementById('question' + nextQuestion).classList.add('active');
}

function submitQuiz() {
    var correctAnswers = {
        q1: 'C',
        q2: 'B',
        q3: 'D',
        q4: 'C',
        q5: 'C'
    };

    var form = document.getElementById('quizForm');
    var score = 0;

    for (var question in correctAnswers) {
        var selectedAnswer = form[question].value;
        if (selectedAnswer === correctAnswers[question]) {
            score++;
        }
    }

    document.getElementById('result').innerText = 'You scored ' + score + ' out of ' + Object.keys(correctAnswers).length;
    form.style.display = 'none';
}