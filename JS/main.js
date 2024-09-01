var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 60; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtime() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            showAlert();  // Call the function to show the alert when the timer hits 0
        }
    }, 1000);
}

function showAlert() {
    var playAgain = confirm("Time's up! Do you want to replay?");
    if (playAgain) {
        resetGame();
    } else {
        alert("Your final score is: " + score);
    }
}

function resetGame() {
    timer = 60;
    score = 0;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timerval").textContent = timer;
    getNewHit();
    makebubble();
    runtime();
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (timer > 0 && clickednum === hitrn) {
        increaseScore();
        makebubble();
        getNewHit();
    }
});

// Initial function calls
runtime();
makebubble();
getNewHit();
