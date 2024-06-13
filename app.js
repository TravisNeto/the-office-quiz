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



	/*----- state variables -----*/

	// let [choice0, choice1, choice2, choice3] = [guess0, guess1, guess2, guess3]

	let currentQuestion = 1;
	let totalQuestions = 4;
	
	let questionStatus = `Question ${currentQuestion} of ${totalQuestions}`
   	let choicesGameStatus = false




	/*----- cached elements  -----*/

const init = (event) => {
	choices.forEach((choice) => {
		choice.style.visibility = "hidden"
	})
	guesses.forEach((guess) => {
		guess.style.visibility = "hidden"
	})
}
const question = document.getElementById(".question")
const choices = document.querySelectorAll(".choice")
const guesses = document.querySelectorAll(".guess")
const questionProgress = document.querySelector(".progress")
const buttonChoicesEl = document.querySelector(".choices-game")
const buttonCharactersEl = document.querySelector(".characters-game")
const imgEl = document.querySelector("img")
const buttonChooseEl = document.querySelectorAll(".choice")
const classQuestion = document.querySelector(".question")
const buttonTrueEl = document.querySelector(".true")
const buttonFalseEl = document.querySelector(".false")
const divAnswers = document.querySelector(".game-area")
const questionParent = document.querySelector(".question-parent")
const answersEl = document.querySelector(".answers")
const charactersQuesEl = document.querySelector(".characters")


	/*----- functions -----*/

function choicesGame() {
	classQuestion.textContent = questions.trueOrFalseChoices[0].question

}

function charGame() {
	classQuestion.textContent = questions.characterQuestions[0][0]

}


function charactersEl() {
	charactersQuesEl.style.display = "block"

}

function displayQA() {
	questionParent.style.display = "block"
	answersEl.style.display = "block"
}


// side buttons

function choicesGameStart(event) {
	hideImg()
	choicesGame()
	displayQA()

}


function charGameStart(event) {
	hideImg()
	charGame()
	charactersEl()
}


// hide game start

function hideImg() {
	imgEl.style.visibility = "hidden"	
}

function hideChoicesAnswers() {
	divAnswers.style.visibility = "hidden"
}



//  function trueBtn(event) {
//  	if (correctAnswer === true) {
// 		render("True")
// 	}
// 		render("False!")
//  }



// function falseBtn() {

// }



// function init () {
// 	console.log('Office Game')
// }


// function render() {
//  	updateMessage()
//  }


// function updateMessage() {

//  }




	/*----- event listeners -----*/

window.addEventListener("load", init)


buttonChoicesEl.addEventListener("click", choicesGameStart)
buttonCharactersEl.addEventListener("click", charGameStart)
buttonTrueEl.addEventLisener("click", trueBtn)
buttonFalseEl.addEventLisener("click", falseBtn)
	



// make initial state where instead of choices, it displays a picture
// game starts when player selects Choices or Characters buttons
// run through questions of selected chategory
// update bottom ticker progress as next question comes

// within game running, declare when the player chooses correctly or incorrectly
// display to user that they got it right or wrong (feedback)