const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timerLeft = 1500;

function updateTimer() {
  let min = Math.floor(timerLeft / 60);
  let sec = timerLeft % 60;
  let formattedTime = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timerLeft--;
    updateTimer();
    if (timerLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timerLeft = 1500;
    }
  }, 1400);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timerLeft = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
