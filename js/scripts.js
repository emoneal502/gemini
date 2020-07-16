
//Questions

var question = [
    {
        "question": "How would you describe yourself?",
        "answer1": "Psyched",
        "answer1Total": "1",
        "answer2": "Shouting",
        "answer2Total": "2",
        "answer3": "Risky in business",
        "answer3Total": "3",
        "answer4": "Undetermined",
        "answer4Total": "4"
    },
    {
        "question": "What excites you the most?",
        "answer1": "Oprah",
        "answer1Total": "1",
        "answer2": "Someone showing me the money",
        "answer2Total": "2",
        "answer3": "Turtle Necks",
        "answer3Total": "3",
        "answer4": "Xenu",
        "answer4Total": "4"
    },
    {
        "question": "1 being the lowest and 4 being the highest, how freaking amped are you right now?",
        "answer1": "1) I have been more amped",
        "answer1Total": "1",
        "answer2": "2) Loving finger guns",
        "answer2Total": "2",
        "answer3": "3) I don't think I could be any more amped",
        "answer3Total": "3",
        "answer4": "4) Meeting L Ron Hubbard and reaching enlightenment level amped",
        "answer4Total": "4"
    },
    {
        "question": "Where would you rather be?",
        "answer1": "On Oprah's couch",
        "answer1Total": "1",
        "answer2": "At my parent's house when they are out of town",
        "answer2Total": "2",
        "answer3": "Holding my ex wife hostage",
        "answer3Total": "3",
        "answer4": "Amid the eternal return of the afterlife",
        "answer4Total": "4"
    }
]

//Variables

const currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = question.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');

//Question Generator 
function generateQuestions (index, questionArray) {
    //Selecting each question to pass it to a particular index
    const currentQuestion = questionArray[index];
    const option1Total = currentQuestion[index].answer1Total;
    const option2Total = currentQuestion[index].answer2Total;
    const option3Total = currentQuestion[index].answer3Total;
    const option4Total = currentQuestion[index].answer4Total;
//HTML Elements
    questionEl.innerHTML = '${index + 1}. ${question.question}'
    option1.setAttribute('data-total', '${option1Total}');
    option2.setAttribute('data-total', '${option2Total}');
    option3.setAttribute('data-total', '${option3Total}');
    option4.setAttribute('data-total', '${option4Total}');

    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}

//Next Question
function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Make sure an option is selected
    if(!selectedOption) {
        alert("Select an option or you'll never know which face you are and therefore will never know yourself");
        return;
    }
    //Get value of selection
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    //Add answer score to array
    score.push(answerScore);
    selectedAnswersData.push()

    const totalScore = score.reduce((total, currentNum) => total + currentNum);
    //Increment current question number to be used as the index for each array
    currentQuestion++;
    //Once finished clear checked
    selectedOption.checked = false;
    //When quiz is on final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    //Once quiz is finished, hide container and show resutls *****ISSUE BELOW
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML = 
            `<h1 class="final-score"> Your score: ${totalScore}</h1>
            <div class="summary">
                <h1>Summary</h1>
                <p>Possible personality traits, see below for a summary based on your results:</p>
                <p>15-20 - Turnle Neck</p>
                <p>10-14 - Finger Guns</p>
                <p>5-9 - Screaming</p>
                <p>1-4 - Risky Business</p>
            </div>
            <button class="restart">Restart</button>`
        return;
    }
    console.log(question);
    generateQuestions(currentQuestion, question);
}

//Function to load previous question
function loadPreviousQuestion() {
    currentQuestion--;
    score.pop();
    generateQuestions(currentQuestion);
}

//Function to reset and restart the quiz
function restartQuiz(e) {
    if(e.target.matches('button')) {
        currentQuestion = 0;
        score = [];
        location.reload();
    }
}

generateQuestions(currentQuestion, question);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);