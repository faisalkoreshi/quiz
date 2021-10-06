const quizData =[
	{
		question:'Which of the following are basic security guard duties?',
		a:'Enforcing trafing rulls on city streets',
		b:'Patrolling the public place and enforcing law',
		c:'Enforcing rules and regulations on private property',
		d:'Finding and capturing wanted criminals',
		correct: 'c'
	},
	{
		question:'The criminal code of Canada allows :',
		a:'Special authorities for police officers and security guard',
		b:'Security guards the same authorities as other private citizens',
		c:'Security guards to use reasonable force arresting people named on warrant ',
		d:'Finding and capturing wanted criminals',
		correct: 'b'
	},
	{
		question:'What is the best description of a site patrol duty?:',
		a:'Assigned to a specific site. patrolling the property',
		b:'Assigned to a specific static post',
		c:'Assigned to patrol between many sites',
		d:'Assigned to patrol a specific area for the purpose of detecting fire ',
		correct: 'a'
	},
	{
		question:'Which of the following regulates the security industry in Ontario?',
		a:'The criminal code and charter of right  ',
		b:'The private security invatigative services act, 2005.',
		c:'The police services act.',
		d:'The private investigators security gurds act, 1990',
		correct: 'b'
	},
	{
		question:'What is the maximum penalty for an individuals violation of the code of conduct ?',
		a:'$1000.00 fine  ',
		b:'Community service',
		c:'$25,000.00 fine and/or a year in jail',
		d:'Suspension or revocation of the security gurd licence ',
		correct: 'c'
	}



]

const quiz = document.getElementById('quiz');
const answerEls =document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
const submitBtn =document.getElementById('submit');

let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz(){

	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEls.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;


}

function deselectAnswers(){

	answerEls.forEach(answerEls =>answerEls.checked = false)

}

function getSelected(){
	let answer 

	answerEls.forEach(answerEls =>{
		if(answerEls.checked ){
			answer =answerEls.id
		}

	})

	return answer

}

submitBtn.addEventListener('click',()=>{

	const answer = getSelected();
	if(answer){
		 if(answer===quizData[currentQuiz].correct){
			 score++;
			 alert(" Your answare is correct");
		 }
		 currentQuiz++
		 if(currentQuiz < quizData.length){
			 loadQuiz();
		 } else{
			quiz.innerHTML =`<h2>Your answared  correctly ${score}/${quizData.length} of questions</h2>
			<button onclick="location.reload()">Reload</button>
			`
		 }
	}

})