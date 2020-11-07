var quizTimer = document.querySelector(".quizTimer");
var quizBody = document.getElementById("quizBody");

var quizScore = 0;

for (var i = 0; i < quizQuestions.length; i++) {
    window.prompt(quizQuestions[i].prompt);
    if (response == quizQuestions[i].answer);
    score++;
    alert("You're right!");
} else {
    quizTimer--;
    alert("You're wrong!");
}

var quizQuestions = [
    {
        prompt: "What number is 1?\n(a) 1\n\ (b) 2\n(c) 3",
        answer: "a"
    },
    {
        prompt: "What number is 2?\n(a) 1\n\ (b) 2\n(c) 3",
        answer: "b"
    },
    {
        prompt: "What number is 3?\n(a) 1\n\ (b) 2\n(c) 3",
        answer: "c"
    },
]

var secondsRemaining = 30;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsRemaining--;
        quizTimer.textContent = secondsRemaining + " seconds left until your quiz is finished.";

        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    quizTimer.textConent = " ";

    // var placeholderImage = document.createElement("img");

    // placeholderImage.setAttribute("src", "https://i.pinimg.com/originals/2e/d6/cf/2ed6cf351143373b3f82dd56a1a1e84a.jpg");
    // quizBody.appendChild(placeholderImage)
    ;

}

setTime();
