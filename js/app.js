	/*----- constants -----*/
	const questions = {

		trueOrFalseChoices: [],
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



let [choice0, choice1, choice2, choice3] = [guess0, guess1, guess2, guess3]

let currentQuestion = 1;
let totalQuestions = 4;

let questionStatus = "Question" + currentQuestion + "of" + totalQuestions;
console.log(questionStatus)





	/*----- state variables -----*/




	/*----- cached elements  -----*/

const question = document.getElementById("")
const choices = document.getElementById("")
const buttonChooseEl = document.querySelectorAll("#Choose")


	/*----- event listeners -----*/



	
	/*----- functions -----*/

function init () {
	console.log('Office Game')
}


function render() {
	updateMessage()
}


function updateMessage() {

}
