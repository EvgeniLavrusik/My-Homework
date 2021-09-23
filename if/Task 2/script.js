const firstPlayer = prompt(`Enter the «rock» «scissors» or «paper»`);
const secondPlayer = prompt(`Enter the «rock» «scissors» or «paper»`);


if  (firstPlayer !== "paper" ||
	firstPlayer !== "rock" ||
	firstPlayer !== "scissors" ||
	secondPlayer !== "paper" ||
	secondPlayer !== "scissors" ||
	secondPlayer !== "rock" ||
	+firstPlayer === 0 ||
	+secondPlayer === 0) {
	console.log(`Enter the «rock» «scissors» or «paper»`);
} else if (firstPlayer === "paper" && secondPlayer === "rock" ||
	firstPlayer === "rock" && secondPlayer === "scissors" ||
	firstPlayer === "scissors" && secondPlayer === "paper") {
	console.log(`First player WINNNN!!`)
} else if (secondPlayer  === "paper" && firstPlaye === "rock" || secondPlayer  === "rock" && firstPlaye === "scissors" || secondPlayer  === "scissors" && firstPlaye === "paper") {
	console.log(`Second player WINNNN!!!!`)
} else if (firstPlayer === secondPlayer) {
	console.log(`Draw!!`)
} 





