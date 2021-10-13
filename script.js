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
		a:'Employees',
		b:'Customer',
		c:'Everyone entering the premises',
		d:'The general public',
		correct: 'c'
	},
	{
		question:'10. Which of the following is true about alarms?',
		a:'Security guards can easily obtain prompt  back up when needed',
		b:'Security guard  always work with partners so they can investigate alarm',
		c:'Security gurds often respond alone and do not have immediate backup',
		d:'Security guards  only respond to false alarm',
		correct: 'c'
	},
	{
		question:'11. Which of the following are possible indicators of a person intoxicated by drug?',
		a:'Signs of nervousness, body twitching and sweating',
		b:'A limp right arm',
		c:'Speaking in a high pitched and loud voice',
		d:'Increased ability to reason and think rapidly',
		correct: 'a'
	},
	{
		question:'12.What patterns should be avoided by security guards?',
		a:'Regularly scheduled rotating shift',
		b:'Knowing where you are all time and how to summon help',
		c:'Regular people and their activities on the site',
		d:'Completing patrols routinely at the same time each day',
		correct: 'd'
	},
	{
		question:'13. What are the following types of report a security guard may normally complete',
		a:'Shift logs,incident reports, briefing reports and use of force report',
		b:'Crown briefs and private information',
		c:'Timetables needs assessments and recommendation',
		d:'Executive summary and progress report',
		correct: 'a'
	},
	{
		question:'14.What words  best describe what is the required regarding statement? ',
		a:'Recorded',
		b:'Verbatim',
		c:'Paraphrased',
		d:'Handwritten',
		correct: 'b'
	},
	{
		question:'15. What is required of employers  according to the occupational Health & Safety act?',
		a:'Provide body armour to employees',
		b:'Provide a reasonable safe and healthy  work environment',
		c:'Provide higher pay rates  in risky  work environment',
		d:'Ensure that two guards are assigned  to a site at night time',
		correct: 'b'
	},
	{
		question:'16. When responding to an alarm and detection a lot of smoke a guard should :',
		a:'Call the fire department and start search for people inside',
		b:'Call the fire department and put the fire out',
		c:'Enter the building to check for trap people',
		d:'Call the fire department, stay a safe distance keep people back',
		correct: 'd'
	},
	{
		question:'17. What is the first priority when responding to an emergency? :',
		a:'Preserve the evidence and ensure the scene does not get contaminated',
		b:'Gather witness and take statement',
		c:'Assess hazards  and sure the area is safe to approach',
		d:'Triage injuries and treat life threatening injuries',
		correct: 'c'
	},
	{
		question:'18. What of the following is a failure to provide duty of care ? :',
		a:'Fail to report  a normal looking car in the parking lot, later found to be a crime scene',
		b:'Fail to confiscate a barbeque from a balcony at an apartment that later starts a fire',
		c:'Fail to report a broken window  noticed that turns out  to be the entry for a theft ',
		d:'Fail to assess the root causes of a fire',
		correct: 'c'
	},
	{
		question:'19. What should you do preserving a crime scene ? :',
		a:'Remove broken glass, knives, blood and other safety hazards ',
		b:'Secure ther perimeter and investigate the scene, personally',
		c:'Determine the center of the scene and work your way out',
		d:'Secure the scene and ensure no one enter, touches or move anything until police arrive ',
		correct: 'd'
	},
	{
		question:'20. What should you do when receiving a bomb threat  ? :',
		a:'Remove suspicious looking package from the area.',
		b:'Notify people working in the building there could be a bomb',
		c:'Immediately call 911',
		d:'Contact property management , report the matter and follow their instruction',
		correct: 'd'
	},
	{
		question:'21. What is the statute law? :',
		a:'Written law',
		b:'Family law',
		c:'Provincial law',
		d:'Case law',
		correct: 'a'
	},
	{
		question:'22. Which of the following is true in most case of criminal law? :',
		a:'Assumed guilty until proven innocent',
		b:'The onus is on the accused to prove innocence',
		c:'The onus is on the complainant to prove guilt',
		d:'The burden of proof is on both parties to the offence',
		correct: 'a'
	},
	{
		question:'23. which of following related to the  court system true:',
		a:'Ontario Court decisions supersede those of the supreme court of Canada',
		b:'Municipality have the authority to make laws contradicting provincial law',
		c:'Lower courts are bound  by the decisions of higher court',
		d:'Provincial Appeals court are the highest court in the land ',
		correct: 'c'
	},
	{
		question:'24. which of following related to the  court system true:',
		a:'Ontario Court decisions supersede those of the supreme court of Canada',
		b:'Municipality have the authority to make laws contradicting provincial law',
		c:'Lower courts are bound  by the decisions of higher court',
		d:'Provincial Appeals court are the highest court in the land ',
		correct: 'c'
	},
	
	
	






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