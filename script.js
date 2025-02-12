let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

const minDisplay = document.getElementById("minutes");
const secDisplay = document.getElementById("seconds");
const msDisplay = document.getElementById("milliseconds");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Function to start the timer
function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// Function to reset the timer
function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    minDisplay.textContent = formatTime(minutes);
    secDisplay.textContent = formatTime(seconds);
    msDisplay.textContent = formatTime(milliseconds / 10);
}

// Function to format time (ensures two digits)
function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial display update
updateDisplay();
