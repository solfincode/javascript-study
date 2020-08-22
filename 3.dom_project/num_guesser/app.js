/*
game function
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guesses remaining
- notify the player of the correct answer if loose
- let player choose to play again
*/
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;
//ui element
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event
game.addEventListener("mousedown", function (e) {
	if (
		e.target.className ===
		"bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-10 play-again"
	) {
		window.location.reload();
		guessInput.value = "";
	}
});
// listen for guess
guessBtn.addEventListener("click", function () {
	let guess = parseInt(guessInput.value);
	//validation
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`please enter number between ${min} and ${max}`, "red");
	}

	//check if won
	if (guess === winningNum) {
		gameOver(true, `${winningNum} is correct you win!!`);
	} else {
		guessesLeft -= 1;
		if (guessesLeft === 0) {
			gameOver(
				false,
				`game over you lost, the correct number  was ${winningNum} is correct!`
			);
			guessLeft = 0;
		} else {
			guessInput.style.borderColor = "red";

			// tell feedback to user
			setMessage(
				`${guessInput.value} is incorrect! ${guessesLeft} guesses left`,
				"red"
			);
			guessInput.value = "";
		}
	}
});

function setMessage(msg, color) {
	message.textContent = msg;
	message.style.color = color;
}

function gameOver(won, msg) {
	let color;
	won === true ? (color = "green") : (color = "red");
	guessInput.disabled = true;
	//change border color
	guessInput.style.borderColor = color;
	message.style.color = color;
	// set message
	setMessage(msg);
	//play again
	guessBtn.textContent = "play again";
	guessBtn.className =
		"bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-10 play-again";
}

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
