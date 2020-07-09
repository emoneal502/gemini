
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

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');

//Question Generator 
function generateQuestions (index) {
    const question = queston[index];
    const option1Total = question[index].answer1Total;
    const option2Total = question[index].answer2Total;
    const option3Total = question[index].answer3Total;
    const option4Total = question[index].answer4Total;
//HTML Elements
    
}