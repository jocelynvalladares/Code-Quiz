// select all elements 
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElemntById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

// create the questions
let questions = [ ... ];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// render a question 
function runningQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC
}
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion;
    qIndex++){
        progress.innerHTML += "<div class='prog'";
    }
}

    {
        question : "what does HTML Stand for?"
        imgSrc : "img/html.png",
        choiceA : "correct",
        choiceB : "wrong",
        choiceC : "wrong",
        correct : "A",
    },{
        question : "what does css stand for?",
        imgSrc : "img/",
        choiceA : "wrong",
        choiceB : "correct",
        choiceC : "wrong",
        correct : "A",
    },{
        question : "what does js stand for?",
        imgSrc : "img/",
        choiceA : "wrong",
        choiceB : "wrong",
        choiceC : "correct",
        correct : "C",

    }
]