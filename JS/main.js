let timer = 60;
let score = 0;
let hitrn = 0;
let highScore = localStorage.getItem("highScore") || 0;

document.querySelector("#scoreval").textContent = score;
document.querySelector("#timerval").textContent = timer;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 60; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function startTimer() {
    let timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInterval);
            checkHighScore();
            showAlert();
        }
    }, 1000);
}

function checkHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        alert(`🎉 New High Score: ${highScore}!`);
    }
}

function showAlert() {
    let playAgain = confirm(`Time's up! Your score: ${score}\nHigh Score: ${highScore}\nDo you want to replay?`);
    if (playAgain) {
        resetGame();
    }
}

function resetGame() {
    timer = 60;
    score = 0;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timerval").textContent = timer;
    getNewHit();
    makeBubble();
    startTimer();
}

document.querySelector("#pbtm").addEventListener("click", (event) => {
    if (event.target.classList.contains("bubble")) {
        let clickedNum = Number(event.target.textContent);
        if (timer > 0 && clickedNum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    }
});

// Initialize Game
startTimer();
makeBubble();
getNewHit();
