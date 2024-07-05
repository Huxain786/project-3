const questions = [
    {
        question:"What is the capital of France?",
        answers: [
            { text: "london", correct: false},
            { text: "Berlin", correct: false},
            { text: "paris", correct: true},
            { text: "madrid", correct: false},
        ]

    },
    {
        question:"What is the largest planet in our solar system?",
        answers: [
            { text: "mars", correct: false},
            { text: "venus", correct: false},
            { text: "jupiter", correct: true},
            { text: "saturn", correct: false},
        ]
    },
    {
        question:"Which programming language is commonly used for web development?",
        answers: [
            { text: "python", correct: false},
            { text: "java", correct: false},
            { text: "javascript", correct: true},
            { text: "C++", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerhtml = "next";
    showquestion();
}
function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement. innerHTML = questionNo +". " + currentQuestion.
    question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement ("button");
    button. innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answrer.correct;
    }
    button.addEventListener("click", selectAnswer);
    });
}
function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectedbtn = e.target;
const iscorrect = selectbtn.dataset.correct === "true";
if(iscorrect){
    selectedbtn.classList.add("correct");
}else{
    selectedbtn.classlist.add("incorrect");
}
Array.from(answerButtons.children) .forEach(button => {
    if(button.dataset.correct === "true"){
    button.classList.add ("correct");
    }
   button.disabled = true;
});
nextButton.style.display = "block";
}
    startQuiz()