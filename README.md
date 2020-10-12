# 04 Web APIs: Code Quiz

## Griffins TikTok Quiz

### How it works

#### This application is a general quiz using javascript as well as css and bootstrap styling

* The User will hit the *start button* to begin their quiz

* Then they will be asked a series of questions regarding various growth hacks on TikTok

* After they will be directed to a prompt to list their name to be added to the high scores
 
## How it was built

* I began going over my *Html Skleton* 

* I began my project listing the variables starting with the question arrays that would be used to display my questions

* I then added my event listener on the start button so it could start the quiz

* Below this I made my functions

* Started the timer and listed the rules regarding it

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

* The getQuestions function is where I place the Questions and Answer Choices on the HTML page

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

* The Check Answer Function is where we evaluate how the code detects and alerts the right and wrong answers

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

* The next Question Function automatically sends us to the next question after we are totally done with the last one

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length || timer < 0) {
        timer = 0;
        endGame();
    }   
    console.log("calling getQuestion inside of nextQuestion")
    getQuestion();
}

* The endGame Function is where we end all the functions regarding the questions and the timer and we show the user their score  

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
    setTimeout(showHighScore, 2);
}

* The high score function is where we first prompt the user for their name and then we add them and their scores to the page

function showHighScore() {
  var name = prompt("Please enter your name");

  var high_scores = localStorage.getItem("scores");

  if (!high_scores) {
    high_scores = [];
  } else {
    high_scores = JSON.parse(high_scores);
  }
