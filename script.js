var quizTimer = document.querySelector(".quizTimer");
var quizBody = document.getElementById("quizBody");

var secondsRemaining = 30;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        quizTimer.textContent = secondsRemaining + " seconds left until your quiz is finished.";

        if(secondsRemaining === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    quizTimer.textConent = " ";

    var placeholderImage = document.createElement("img");

    placeholderImage.setAttribute("src", "https://i.pinimg.com/originals/2e/d6/cf/2ed6cf351143373b3f82dd56a1a1e84a.jpg");
    quizBody.appendChild(placeholderImage)
;

}

setTime();
// var quizTimer = document.querySelector(".quizTimer");
// var quizBody = document.getElementById("#quizBody");
// var secondsRemaining = 15;

// function beginTimer() {
//     var totalTime = setTimer(function() {
//         secondsRemaining--;
//         quizTimer.textContent = secondsRemaining + "seconds left in Web APIs Code Quiz.";

//         if(secondsRemaining === 0) {
//             clearInterval(totalTime);
            
//             // How do I redirect user to "High Scores" HTML & JavaScript files?
//         }
//     })
// }
// var questionsArray = [
//     {
//         Question: "What is number 1?",
//         answerOptions: [
//             "1.",
//             "2.",
//             "3.",
//             "4.",
//             "5.",
//         ]
//         Question: "What is number 2?",
//         answerOptions: [
//             "1.",
//             "2.",
//             "3.",
//             "4.",
//             "5.",
//         ]
//         Question: "What is number 3?",
//         answerOptions: [
//             "1.",
//             "2.",
//             "3.",
//             "4.",
//             "5.",
//         ]
//         Question: "What is number 4?",
//         answerOptions: [
//             "1.",
//             "2.",
//             "3.",
//             "4.",
//             "5.",
//         ]
//         Question: "What is number 5?",
//         answerOptions: [
//             "1.",
//             "2.",
//             "3.",
//             "4.",
//             "5.",
//         ]
//     }
// ];