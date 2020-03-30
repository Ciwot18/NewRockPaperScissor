				// buttons is a node list. It looks and acts much like an array.
		const buttons = document.querySelectorAll('button');
		
		buttons.forEach((button) => {

		  button.addEventListener('click', (e) => {
			if (button.id == "Rock") {
				computerSelection = computerPlay();
				let move = "Rock";
				playRound(playerPlay(move), computerSelection);
			} else if (button.id == "Paper") {
				computerSelection = computerPlay();
				let move = "Paper";
				playRound(playerPlay(move), computerSelection);
			} else if (button.id == "Scissors") {
				computerSelection = computerPlay();
				let move = "Scissors";
				playRound(playerPlay(move), computerSelection);
			} else if (button.id == "Reset") {
				window.location.reload();
			}
				printres();
				winner();
				//alert(move);
				//console.log(playRound(playerPlay(move), computerSelection));
		  });
		});
		
		function computerPlay() {
			let max = 3;
			let play = Math.floor(Math.random()*max);
			if (play == 0) {
				return "Rock";
			} else if (play == 1) {
				return "Paper";
			} else {
				return "Scissors";
			}
		}
		
		function playerPlay(move) {
			if (move.toLowerCase() == "rock") {
				return "Rock";
			} else if (move.toLowerCase() == "paper") {
				return "Paper";
			} else if (move.toLowerCase() == "scissors") {
				return "Scissors";
			}
		}
		
		let wins = 0;
		let losses = 0;
		let ties = 0;
		
		function playRound(playerSelection, computerSelection) {
			if (playerSelection == "Rock" && computerSelection == "Paper") {
				losses++;
				return "You have lost: "+computerSelection+" beats "+playerSelection;
			} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
				wins++;
				return "You have won: "+playerSelection+" beats "+computerSelection;
			} else if (playerSelection == "Paper" && computerSelection == "Rock") {
				wins++;
				return "You have won: "+playerSelection+" beats "+computerSelection;
			} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
				losses++;
				return "You have lost: "+computerSelection+" beats "+playerSelection;
			} if (playerSelection == "Scissors" && computerSelection == "Rock") {
				losses++;
				return "You have lost: "+computerSelection+" beats "+playerSelection;
			} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
				wins++;
				return "You have won: "+playerSelection+" beats "+computerSelection;
			} else {
				ties++;
				return "It's a tie: "+playerSelection+" and "+computerSelection+" are equal.";
			}
		}

		function winner() {
			if (wins > losses) {
				content2.textContent = "You are winning";
			} else if (wins < losses) {
				content2.textContent = "Computer is winning";
			} else if (wins == losses) {
				content2.textContent = "It's a tie";
			}
		}
		
		function printres() {
			content.textContent = 'The actual score is: '+wins+" Wins for you, "+losses+" Losses for you and "+ties+" ties.";
		}
	
const container = document.querySelector('#result');

const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);
const content2 = document.createElement('div');
content2.classList.add('content');
container.appendChild(content2);