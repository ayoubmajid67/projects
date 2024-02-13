let gameBoxes = document.querySelectorAll(".boardParent .box h3");
let domTurn = document.querySelector(".mainHeaderInfo span");
let winnerContainer = document.querySelector(".winnerContainer");

let symbols = {
	userSymbol: "X",
	pcSymbol: "O",
};
let arrGame = ["", "", "", "", "", "", "", "", ""];

function getPcChoice(arrGame) {
	let emptyChoices = [];

	arrGame.forEach((element, index) => {
		if (element == "") emptyChoices.push(index);
	});

	if (emptyChoices.length == 0) return -1;

	let randomIndex = Math.floor(Math.random() * emptyChoices.length);

	return emptyChoices[randomIndex];
}

function xoChecker(arrGame, symbol) {
	let arrPattern = [];
	if (arrGame[0] == symbol && arrGame[1] == symbol && arrGame[2] == symbol) return { status: true, arrPattern: [0, 1, 2] };
	if (arrGame[3] == symbol && arrGame[4] == symbol && arrGame[5] == symbol) return { status: true, arrPattern: [3, 4, 5] };
	if (arrGame[6] == symbol && arrGame[7] == symbol && arrGame[8] == symbol) return { status: true, arrPattern: [6, 7, 8] };

	if (arrGame[0] == symbol && arrGame[3] == symbol && arrGame[6] == symbol) return { status: true, arrPattern: [0, 3, 6] };
	if (arrGame[1] == symbol && arrGame[4] == symbol && arrGame[7] == symbol) return { status: true, arrPattern: [1, 4, 7] };
	if (arrGame[2] == symbol && arrGame[5] == symbol && arrGame[8] == symbol) return { status: true, arrPattern: [2, 5, 8] };

	if (arrGame[0] == symbol && arrGame[4] == symbol && arrGame[8] == symbol) return { status: true, arrPattern: [0, 4, 8] };
	if (arrGame[2] == symbol && arrGame[4] == symbol && arrGame[6] == symbol) return { status: true, arrPattern: [2, 4, 6] };

	return false;
}

function checkIfBoardIsFull(arrGame) {
	for (let i = 0; i < arrGame.length; i++) {
		if (arrGame[i] == "") return false;
	}

	return true;
}

function checkTheWinner(arrGame) {
	let result;

	if ((result = xoChecker(arrGame, symbols.userSymbol))) result.winner = "user";
	else if ((result = xoChecker(arrGame, symbols.pcSymbol))) result.winner = "pc";
	else {
		if (checkIfBoardIsFull(arrGame)) {
			result = new Object();
			result.winner = "Draw";
		} else {
			result = new Object();
			result.winner = "continue";
		}
	}

	return result;
}

let gameStatus = "continue";

function DrawWinnerPattern(arrPattern) {
	// horizontal cases :
	if (arrPattern[0] == 0 && arrPattern[1] == 1 && arrPattern[2] == 2) {
		gameBoxes[0].parentElement.classList.add("Pattern1");
		gameBoxes[1].parentElement.classList.add("Pattern1");
		gameBoxes[2].parentElement.classList.add("Pattern1");
	}
	if (arrPattern[0] == 3 && arrPattern[1] == 4 && arrPattern[2] == 5) {
		gameBoxes[3].parentElement.classList.add("Pattern1");
		gameBoxes[4].parentElement.classList.add("Pattern1");
		gameBoxes[5].parentElement.classList.add("Pattern1");
	}
	if (arrPattern[0] == 6 && arrPattern[1] == 7 && arrPattern[2] == 8) {
		gameBoxes[6].parentElement.classList.add("Pattern1");
		gameBoxes[7].parentElement.classList.add("Pattern1");
		gameBoxes[8].parentElement.classList.add("Pattern1");
	}

	// vertical cases :
	if (arrPattern[0] == 0 && arrPattern[1] == 3 && arrPattern[2] == 6) {
		gameBoxes[0].parentElement.classList.add("Pattern2");
		gameBoxes[3].parentElement.classList.add("Pattern2");
		gameBoxes[6].parentElement.classList.add("Pattern2");
	}
	if (arrPattern[0] == 1 && arrPattern[1] == 4 && arrPattern[2] == 7) {
		gameBoxes[1].parentElement.classList.add("Pattern2");
		gameBoxes[4].parentElement.classList.add("Pattern2");
		gameBoxes[7].parentElement.classList.add("Pattern2");
	}
	if (arrPattern[0] == 2 && arrPattern[1] == 5 && arrPattern[2] == 8) {
		gameBoxes[2].parentElement.classList.add("Pattern2");
		gameBoxes[5].parentElement.classList.add("Pattern2");
		gameBoxes[8].parentElement.classList.add("Pattern2");
	}

	// special cases :
	if (arrPattern[0] == 0 && arrPattern[1] == 4 && arrPattern[2] == 8) {
		gameBoxes[0].parentElement.classList.add("Pattern3");
		gameBoxes[4].parentElement.classList.add("Pattern3");
	}
	if (arrPattern[0] == 2 && arrPattern[1] == 4 && arrPattern[2] == 6) {
		gameBoxes[2].parentElement.classList.add("Pattern4");
		gameBoxes[4].parentElement.classList.add("Pattern4");
	}
}

function closeWinnerContainer() {
	winnerContainer.style.visibility = "none";
	winnerContainer.style.display = "none";

	setTimeout(() => {
		resetGame();
	}, 40);
}
function showResult(result) {
	winnerContainer.style.visibility = "visible";
	winnerContainer.style.display = "block";
	if (result != "Draw") winnerContainer.querySelector(".baseMsg").innerText = "The winner is ";
	else winnerContainer.querySelector(".baseMsg").innerText = "it's a";

	winnerContainer.querySelector(".GameResult").innerText = result + "!";
}

function play(index) {
	if (gameStatus == "Stop") {
	} else if (arrGame[index] == "") {
		domTurn.innerText = symbols.userSymbol;
		gameBoxes[index].innerText = symbols.userSymbol;
		arrGame[index] = symbols.userSymbol;

		let pcChoice = getPcChoice(arrGame);
		if (pcChoice != -1) {
			gameBoxes[pcChoice].innerText = symbols.pcSymbol;
			arrGame[pcChoice] = symbols.pcSymbol;

			setTimeout(() => {
				domTurn.innerText = symbols.pcSymbol;
			}, 50);
		}

		let result = checkTheWinner(arrGame);

		if (result.winner != "continue") {
			if (result.winner != "Draw") DrawWinnerPattern(result.arrPattern);

			setTimeout(() => {
				showResult(result.winner);
			}, 50);
			gameStatus = "Stop";
		}
	}
}

function resetGame() {
	gameBoxes.forEach((element, index) => {
		element.innerText = "";
		arrGame[index] = "";
		element.parentElement.classList.remove("Pattern1", "Pattern2", "Pattern3", "Pattern4");
	});
	gameStatus = "continue";
}
