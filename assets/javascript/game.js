//variables

//game object containing various properties and methods to reduce code
var gameObject = {

	winCount: 0,
	lossCount: 0,
	randomNumber: 0,
	score:  0,

	//increase wins by one
	increaseWinCount () {
		this.winCount++;
	},

	//increases losses by one
	increaseLossCount () {
		this.lossCount++;
	},

	//generate a new random number between 19 - 120
	newRandomNumber (){
		this.randomNumber = Math.floor((Math.random() * 102) + 19);
	},

	//to calculate score
	computeScore (points) {
		this.score += points;

	},

	//to reset round
	resetGame () {
		this.score = 0;
		this.newRandomNumber();
	},

	//Did the user win the game?
	userWin (){
		if (this.score === this.randomNumber) {
			return true;
		} else {
			return false;
		}
	},

	//Did the user lose?
	userLose () {
		if (this.score > this.randomNumber){
			return true;
		} else {
			return false;
		}
	}

};

//creating class and assigning attributes for Crystals parent class (template)
class Crystal {
	constructor () {
		this.pointValue;
		this.newPointValue();
	}

	newPointValue() {
		this.pointValue = Math.floor((Math.random() * 12) +1);
	}
}

//new Crystals to inherit parent characteristics
var crystal1 = new Crystal();
var crystal2 = new Crystal();
var crystal3 = new Crystal();
var crystal4 = new Crystal();

//--------------------------------------------------------------------------
//jquery event listeners

//Game play
	//player clicks crystal
	//add that crystal point value to the score
	//test if user won
		//alert win
		//increment winCount
		//reset game
	//test if the user loss
		//if user lost
		//increment lossCount
		//reset game
	//reset randomPointValue for each crystal

var gamePlay = {

	crystal1 () {

		gameObject.score += crystal1.pointValue;
		DOM.execute();
		this.winLose();
	},

	crystal2 () {

		gameObject.score += crystal2.pointValue;
		DOM.execute();
		this.winLose();
	},

	crystal3 () {

		gameObject.score += crystal3.pointValue;
		DOM.execute();
		this.winLose();
	},

	crystal4 () {

		gameObject.score += crystal4.pointValue;
		DOM.execute();
		this.winLose();
	},

	winLose() {
		//Did player win?
		if (gameObject.userWin()) {
			gameObject.increaseWinCount();
			DOM.execute();
			alert("Congratulations!  You win!");
			this.resetGame();
			/*if player hasn't won or lose, continue playing*/
		} else {}
		//Did player lose?
		if (gameObject.userLose()) {
			gameObject.increaseLossCount();
			DOM.execute;
			alert("Uh Oh, you lost this one! Try again!");
			this.resetGame();
			/*if player hasn't won or lose, continue playing*/
		} else {}
	},

	playAgain() {
		gameObject.resetGame();
		crystal1.newPointValue ();
		crystal2.newPointValue ();
		crystal3.newPointValue ();
		crystal4.newPointValue ();
		DOM.execute();
	}
}


//push updates to Browser

// $(document).ready(function() {xxx});
$(function() {

	gamePlay.playAgain();

	$("#crystal-1").click( function() {
		gamePlay.crystal1();
	});

	$("#crystal-2").click( function() {
		gamePlay.crystal2();
	});

	$("#crystal-3").click( function() {
		gamePlay.crystal3();
	});

	$("#crystal-4").click( function() {
		gamePlay.crystal4();
	});
});

//variable to update the text/html

var DOM = {
	execute () {
		$("#random-number").text(gameObject.randomNumber);
		$("#score").text(gameObject.score);
		$("#win-count").text(gameObject.winCount);
		$("#loss-count").text(gameObject.lossCount);
	}

};








