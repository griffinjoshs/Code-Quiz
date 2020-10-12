var questions = [
    {
        title: "What is 2 + 2",
        choices: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        title: "What color is the sky",
        choices: ["blue", "red", "black", "green"],
        answer: "blue"
    },
];
var questionIndex = 0;
var timer = 20;
var timerInterval;

var startElement = document.getElementById("start")

var titleElement = document.getElementById("title")

var timerElement = document.getElementById("timer")

var questionElement = document.getElementById("question")

var endElement = document.getElementById("end")

var scoreElement = document.getElementById("score")

var initialsElement = document.getElementById("initials")

var submitButton = document.getElementById("submit-button")

var startButton = document.getElementById("start-button")

var button1 = document.getElementById("button1")

var button2 = document.getElementById("button2")

var button3 = document.getElementById("button3")

var button4 = document.getElementById("button4")

startButton.addEventListener("click", startGame)
function startGame() {
    setTime();
    startElement.classList.add("hide")
    questionElement.classList.remove("hide")
    console.log("load questions after start button is clicked")
    getQuestion()
}

//start timer
function setTime() {
    timerInterval = setInterval(function () {
        timer--;
        timerElement.textContent = timer + " timer";

        if (timer <= 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}

function getQuestion() {
    //get next question (places the actual question, choices and answers on the html skeleton)
    console.log("updating title element with question Title")
    titleElement.textContent = questions[questionIndex].title
    //button 1,2,3 and 4 element
    var choices = questions[questionIndex].choices
    button1.textContent = choices[0]
    button2.textContent = choices[1]
    button3.textContent = choices[2]
    button4.textContent = choices[3]
    //set button text
    //set button click event handler (event handler will call function called "check answer")
    button1.addEventListener("click", checkAnswer)
    button2.addEventListener("click", checkAnswer)
    button3.addEventListener("click", checkAnswer)
    button4.addEventListener("click", checkAnswer)
}

var correctCount = 0;

function checkAnswer(event) {
    var userAnswer = event.target.innerText
    if (userAnswer === questions[questionIndex].answer) {
        alert("correct")
        correctCount++;
        console.log(correctCount)
    } else {
        alert("wrong")
        timer = timer - 2;
    }
    console.log("calling nextQuestion inside of checkAnswer")
    setTimeout(nextQuestion, 2000)
    
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length || timer < 0) {
        timer = 0;
        endGame();
    }   
    console.log("calling getQuestion inside of nextQuestion")
    getQuestion();
}
    








    //check if "event.target.value" = questions [questionIndex].answer
    //if answer = true tell user they got the answer correct, else (if they got it wrong tell them they got it wrong)
    //increase question index by 1
    //if questionIndex is <(lessthan) questions.length 
    //call getQuestion function again
    //else 
    //call the endGame function


function endGame() {
    //stop timer
    clearInterval(timerInterval)
    //hide question section
    questionElement.classList.add("hide")
    timerElement.classList.add("hide")
    //show the end section
    endElement.classList.remove("hide")
    //wait
    //set the score element to equal timeLeft
    scoreElement = timer
    //set score
    var body = document.body;
    body.outerHTML = "Game over, You scored " + correctCount;
    return
}

function showHighScore() {
  var name = prompt("Please enter your name");

  var high_scores = localStorage.getItem("scores");

  if (!high_scores) {
    high_scores = [];
  } else {
    high_scores = JSON.parse(high_scores);
  }
}

submitButton.addEventListener("click", submitButton) 
{

}

    //retrieve user-entered initials
    //retrieve high scores from local storage, 
    //set var highScores = localStorage.getItem(keyvalue "high scores") cast this using JSON.parse
    //set new score object that will have initials: intials; score: time left
    //push new score object to the high score array
    //save high score array back to local storage
    //})









