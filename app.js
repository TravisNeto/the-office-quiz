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

const init = (event) => {
	choices.forEach((choice) => {
		choice.style.visibility = "hidden"
	})
	guesses.forEach((guess) => {
		guess.style.visibility = "hidden"
	})
}

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
let currentCorrectQ;

	/*----- functions -----*/

function changeQuestion() {
	currentQuestion = currentQuestion +1
	choicesGame()
	
}


function choicesGame() {
	// classQuestion.textContent = questions.trueOrFalseChoices[0].question;
	// const question = questions.trueOrFalseChoices[currentQuestion + 1];
	// console.log(question)
	
	// if (question) {
	// 	classQuestion.textContent = question.question;
	// } else {
	// 	choices.forEach((choice)=> {
	// 		choice.style.visibility = "hidden"
	//  	}); 
	// 	console.log("Game Over")
	// 	return
		currentQuestion++;
		if (currentQuestion < totalQuestions) {
			const question = questions.trueOrFalseChoices[currentQuestion];
			classQuestion.textContent = question.question;
			currentCorrectQ = question.correctAnswer
		} else {
			console.log("Game Over");
			resetGame();
		}
	}


function resetGame() {
		currentQuestion = -1;
		displayMainScreen();
	}
	
function displayMainScreen() {
		
	}


function render() {

}

// choices.forEach((choice, index) => {
// 	choice.textContent = currentQuestion.incorrectAnswers[index];
// 	choice.dataset.correct = currentQuestion.correctAnswer === currentQuestion.incorrectAnswers[index];
// });

// choices.forEach((choice) => {
// 	choice.style.visibility = "visible";
// })

// function charGame() {
// 	classQuestion.textContent = questions.characterQuestions[0].question;
// 	currentQuestion = question.characterQuestions[0];
// }


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
	//hideCharAnswers()

}


function charGameStart(event) {
	hideImg()
	hideChoicesAnswers()
	charGame()
	charactersQuesEl()
}



//// write a function called changeQuestion that can be called when you select correct answer
//// access the next index in the current list of questions
//// call choicesGame if renderQuestion is defined
//// function called gameOver that hides the question, hides buttons, presents a message Game Over, Play Again!




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

function updateMessage() {
	if (correctAnswer){

		
	}
}



 function trueBtn(event) {
 	if (correctAnswer === true) {
		changeQuestion()
	}

 }



function falseBtn() {

}



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

// buttonFalseEl.addEventListener("click", () => {
//     if ("False"); // if the currentCorrectQ is equal btnFalseEl.textContent, move onto next question (choicesGame()). if not, restart the game
// });

// buttonFalseEl.addEventListener("click", () => {
//     if currentCorrectQ = btnFalse // if the currentCorrectQ is equal btnFalseEl.textContent, move onto next question (choicesGame()). if not, restart the game
// });

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



// buttonTrueEl.addEventListener("click", () => {
//     choicesGame("True"); // if the currentCorrectQ is equal btnTrueEl.textContent, move onto next question. if not, restart the game
// }); 
	



// make initial state where instead of choices, it displays a picture
// game starts when player selects Choices or Characters buttons
// run through questions of selected chategory
// update bottom ticker progress as next question comes

// within game running, declare when the player chooses correctly or incorrectly
// display to user that they got it right or wrong (feedback)

