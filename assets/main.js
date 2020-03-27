// Questions for the quiz are contained in the objects below
// *********************************************************************************************************************************************
const question1 = {
    question: "Commonly used data types DO NOT include:",
    answer: ["1. strings", "2. booleans","3. alerts","4. numbers"],
    rightAnswer: 2
}

const question2 = {
    question: "The condition in an if/else statementis enclosed within _____.",
    answer: ["1. quotes", "2. curley brackets","3. parenthesis","4. square brackets"],
    rightAnswer: 2
}

const question3 = {
    question: "Arrays in JavaScript can be used to store _____.",
    answer: ["1. numbers and strings", "2. other arrays","3. booleans","4. all of the above"],
    rightAnswer: 3
}

const question4 = {
    question: "String values must be enclosed within ___ when being assigned to variables",
    answer: ["1. commas", "2. curley brackets","3. quotes","4. parentheses"],
    rightAnswer: 2
}

const question5 = {
    question: "A useful tool durring development and debugging for printing content to the debugger is:",
    answer: ["1. JavaScript", "2. terminal/bash","3. for loops","4. consol.log"],
    rightAnswer: 3

}
//*********************************************************************************************************************************************
// end of the question declartation section


//variable declaration
let questionCounter = 0;
const questionArray = [question1, question2, question3, question4, question5];
var quizAnswer = document.getElementById("quizAnswer");

// set up timer function
//countdownClock(); START THE TIMER HERE
var timeCounter = 30;
function countdownClock(){
    var timeInterval = setInterval(function(){
        var timeString = timeCounter.toString();
        document.getElementById("timerValue").innerText = timeString;
        timeCounter --;

        if(timeCounter === 0){
            clearInterval(timeInterval);
            window.location.replace("high-scores.html");
        }
    }, 1000);
}

//function to genarate and advance questions
function advanceQuestion(){
    //check to see if there are any more questions
    if(questionCounter == questionArray.length ){
        window.location.replace("high-scores.html");
    }
    //printing new question from array
    console.log(questionArray[questionCounter]);
    $("#quizQuestion").text(questionArray[questionCounter].question);
    $("#quizAnswer").empty();
    //genarating respective answers and buttons
    for(var i =0; i<questionArray[questionCounter].answer.length; i++){
        var newButton = $("<button>");
        newButton.attr({"id" : i });
        newButton.addClass("btn btn-primary justify-self-center m-3");
        newButton.text(questionArray[questionCounter].answer[i]);
        $("#quizAnswer").append(newButton);
    }
    //advance to next question
    questionCounter++;
}

quizAnswer.addEventListener("click",function(event){
    event.preventDefault();
    if(event.target.matches("button")) {
        var answer = event.target.id;
        console.log(answer);
        advanceQuestion();
    }
});



//function to check the right answer

//store the correct and incorrect answers

//create score from answers and time left

//generate highscore page from local data



$("#startButton2").click(function(){
    $("#headerText").empty();
    $("#quizAnswer2").addClass("d-none");
    advanceQuestion();
})

$("#answerButton").on("click", function(){
    advanceQuestion();
    questionCounter ++;
    console.log(questionCounter);
})