	/*----- constants -----*/
	const questions = {

		characterQuestions: [
		   {
			 question: "What band did Kevin's band do cover songs of?",
			 incorrectAnswers: ["The Beatles", "Led Zepplin", "NSYNC"],
			 correctAnswer: "The Police"
		   },
		   {
			 question: "What was the name of Angela's cat that passed away?",
			 incorrectAnswers: ["Chipper", "Buttons", "Fluffers"],
			 correctAnswer: "Sprinkles"
		   },
		   {
			 question: "Who was the branch manager before Michael Scott?",
			 incorrectAnswers: ["Jan Levinson", "Todd Packer", "Robert California"],
			 correctAnswer: "Ed Truck"
		   },
		   {
			 question: "What is the name of Toby Flenderson's brother?",
			 incorrectAnswers: ["Gabe", "Gil", "Daryl"],
			 correctAnswer: "Rory"
		   },
	   ],


	   trueOrFalseChoices: [
		{
			question: "Dwight once fired a gun in the office",
			incorrectAnswer: "False!",
			correctAnswer: "True",
		},
		{
			question: "Andy Bernard was sent to Anger Management",
			incorrectAnswer: "False!",
			correctAnswer: "True",
		},
		{
			question: "Michael Scott made a movie named 'Threat Level Sunlight'",
			incorrectAnswer: "True",
			correctAnswer: "False!",
		},
		{
			question: "Michael Scott created his own paper company named 'Speedy Paper'",
			incorrectAnswer: "True",
			correctAnswer: "False!"
		}

	   ]
   }

// 

	/*----- state variables -----*/

	let [choice0, choice1, choice2, choice3] = [guess0, guess1, guess2, guess3]

	let currentQuestion = -1;
	let totalQuestions = 4;
	
	let questionStatus = `Question ${currentQuestion} of ${totalQuestions}`
   	let choicesGameStatus = false
	let correctAnswer = ""




	/*----- cached elements  -----*/

// const init = (event) => {
// 	choices.forEach((choice) => {
// 		choice.style.visibility = "hidden"
// 	})
// 	guesses.forEach((guess) => {
// 		guess.style.visibility = "hidden"
// 	});
// }


const choices = document.querySelectorAll(".choice")
const guesses = document.querySelectorAll(".guess")
const buttonChoicesEl = document.querySelector(".choices-game")
const buttonCharactersEl = document.querySelector(".characters-game")
const imgEl = document.querySelector("img")
const buttonChooseEl = document.querySelectorAll(".choice")
const classQuestion = document.querySelector(".game-question")
const buttonTrueEl = document.querySelector(".true")
const buttonFalseEl = document.querySelector(".false")
const divAnswers = document.querySelector(".game-area")
const questionParent = document.querySelector(".question-parent")
const answersEl = document.querySelector(".answers")
const charactersQuesEl = document.querySelector(".characters")
const messageEl = document.querySelector(".message")
const resetBtn = document.querySelector(".reset-button")
let currentCorrectQ = "";


	/*----- functions -----*/

function showWinMessage () {
	updateMessage("Congrats! You Win!")
}

function showLossMessage () {
	updateMessage("You Lose! Try Again")
}

function updateMessage () {
	const messageEl = document.getElementById("message");
	messageEl.textContent = message;
}


function endGame() {
	messageEl.innerText = "You Lose! Try Again"
	messageEl.innerText = "Winner! Congrats!"
	resetBtn.style.display = "block";
}

function changeQuestion() {
	currentQuestion = currentQuestion +1
	choicesGame()
	
}

function gameMessageEl() {
	messageEl.style.visibility = "visible"
}

function choicesGame() {
	currentQuestion++;
		if (currentQuestion < totalQuestions) {
			const question = questions.trueOrFalseChoices[currentQuestion];
			classQuestion.textContent = question.question;
			currentCorrectQ = question.correctAnswer
		} else {
			resetGame();
		}
	}


function resetGame() {
	currentQuestion = -1;
	imgEl.style.visibility = "visible"
	questionParent.style.visibility = "hidden"
	answersEl.style.visibility = "hidden"
    choices.forEach((choice) => {
    choice.style.visibility = "hidden";
    });
    guesses.forEach((guess) => {
        guess.style.visibility = "hidden";
    });
	init();
}
	

// function charGame() {
// 	classQuestion.textContent = questions.characterQuestions[0].question;
// 	currentQuestion = question.characterQuestions[0];
// }


// function charactersEl() {
// 	charactersQuesEl.style.display = "block"

// }

function displayQA() {
	questionParent.style.display = "block"
	answersEl.style.display = "block"
}


// side buttons

function choicesGameStart(event) {
	hideImg()
	choicesGame()
	displayQA()
	//hideCharAnswers()

}

// Commented out Character category to work on it later
// function charGameStart(event) {
// 	hideImg()
// 	hideChoicesAnswers()
// 	charGame()
// 	charactersQuesEl()
// }


// hide game start

function hideImg() {
	imgEl.style.visibility = "hidden"	
}

function hideChoicesAnswers() {
	divAnswers.style.visibility = "hidden"
}

function hideCharAnswers() {
	choices.style.visibility = "hidden"
}


 function trueBtn(event) {
 	if (correctAnswer === true) {
		changeQuestion()
	}
		resetGame()
 }



function falseBtn() {
	if (correctAnswer === true) {
		change()
	}
		resetGame()
}


function init () {
	resetGame
}


	/*----- event listeners -----*/

window.addEventListener("load", init)

resetBtn.addEventListener("click", resetGame)


buttonChoicesEl.addEventListener("click", choicesGameStart)

buttonFalseEl.addEventListener("click", () => {
    if (currentCorrectQ === buttonFalseEl.textContent) {
        choicesGame();      
    } else {
		resetGame();
	}
});


buttonTrueEl.addEventListener("click", () => {
    if (currentCorrectQ === buttonTrueEl.textContent) {
        choicesGame();      
    } else {
		resetGame();
	}
});



buttonTrueEl.addEventListener("click", () => {
    choicesGame("True"); 
}); 
	