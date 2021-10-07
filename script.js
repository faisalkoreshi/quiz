const quizData =[
	{
		question:'1. Which of the following are basic security guard duties?',
		a:'Enforcing trafing rulls on city streets',
		b:'Patrolling the public place and enforcing law',
		c:'Enforcing rules and regulations on private property',
		d:'Finding and capturing wanted criminals',
		correct: 'c'
	},
	{
		question:'2. The criminal code of Canada allows :',
		a:'Special authorities for police officers and security guard',
		b:'Security guards the same authorities as other private citizens',
		c:'Security guards to use reasonable force arresting people named on warrant ',
		d:'Finding and capturing wanted criminals',
		correct: 'b'
	},
	{
		question:'3. What is the best description of a site patrol duty?:',
		a:'Assigned to a specific site. patrolling the property',
		b:'Assigned to a specific static post',
		c:'Assigned to patrol between many sites',
		d:'Assigned to patrol a specific area for the purpose of detecting fire ',
		correct: 'a'
	},
	{
		question:'4. Which of the following regulates the security industry in Ontario?',
		a:'The criminal code and charter of right  ',
		b:'The private security invatigative services act, 2005.',
		c:'The police services act.',
		d:'The private investigators security gurds act, 1990',
		correct: 'b'
	},
	{
		question:'5. What is the maximum penalty for an individuals violation of the code of conduct ?',
		a:'$1000.00 fine  ',
		b:'Community service',
		c:'$25,000.00 fine and/or a year in jail',
		d:'Suspension or revocation of the security gurd licence ',
		correct: 'c'
	},
	{
		question:'6. Licensees are prohibited from the following acts',
		a:'Following someone without their  consent for the purpose of gathering information',
		b:'Forcibly removing an unwantade patron from a night club',
		c:'Assisting an owner of an apartment by reporting a tenants activits',
		d:'Providing information about a person in a witness protection program',
		correct: 'd'
	},
	{
		question:'7. Which of the following are valid surveillance techniques?',
		a:'Observing The physical environment and Situational awareness',
		b:'Using parabolic microphone to listen in on private conversation',
		c:'Using telescope to peek into Windows of residence',
		d:'Purposely following A vehicle closely to intimidate The subject who is criminal',
		correct: 'a'
	},
	{
		question:'8. Which of the following is a benefit of mobile patrol  compare to foot patrol',
		a:'Greater ability to carry equipment',
		b:'Great ability to chase and catch fleeing criminals',
		c:'Great ability to closely assess the protected the building ',
		d:'Great ability to enforce parking law',
		correct: 'a'
	},
	{
		question:'9. Access control is considered for which types of people',
		a:'',
		b:'',
		c:'',
		d:'',
		correct: 'a'
	},
	{
		question:'',
		a:'',
		b:'',
		c:'',
		d:'',
		correct: 'a'
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