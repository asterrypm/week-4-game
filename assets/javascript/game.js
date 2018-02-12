//variables

var winCount =0;
var lossCount = 0;
var randomNumber = 0;
var score = 0;

//parent class (template for all crystals)
class Crystal {
	constructor () {
		this.pointValue;
		this.newPointValue();
	}

	newPointValue() {
		this.points = Math.floor((Math.random() * 12) +1);
	}
}

//new Crystals to inherit parent characteristics
var crystal1 = new Crystal();
var crystal2 = new Crystal();
var crystal3 = new Crystal();
var crystal4 = new Crystal();


//functions

//increase wins by one
function increaseWinCount (){
	winCount++;
}

//increases losses by one
function increaseLossCount (){
	lossCount++;
}

//generate a new random number between 19 - 120
function newRandomNumber (){
	randomNumber = Math.floor((Math.random() * 102) + 19);
}

//to calculate score
function computeScore (points) {
	score += points;

}

//to reset round
function resetGame () {
	score = 0;
	newRandomNumber();
}

//Did the user win the game?
function userWin (){
	if (score === randomNumber) {
		return true;
	} else {
		return false;
	}
}

//Did the user lose?
function userLose () {
	if (score > randomNumber){
		return true;
	} else {
		return false;
	}
}


increaseWinCount();
increaseLossCount();



