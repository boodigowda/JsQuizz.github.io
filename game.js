const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarfull = document.getElementById('progressBarfull')

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];
     
let questions =  [
    {
        question :"CEO of PFS?",
        choice1:"<script>",
        choice2:"Willign",
        choice3:"<java>",
        choice4:"<php>",
        answer : 2
    },
    {
        question :"PFS longform?",
        choice1:"<script>",
        choice2:"Priority Fulfillment Services",
        choice3:"<java>",
        choice4:"<php>",
        answer : 2
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    {
        question :"PFS head quarters?",
        choice1:"US",
        choice2:"Banglore",
        choice3:"<java>",
        choice4:"<php>",
        answer : 1
    },
    
];
const rightAnswer = 10;
const maxQuestions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions =[...questions];
    getNewQuestion();
}


getNewQuestion = () =>{

    if(availableQuestions.length === 0 || questionCounter >maxQuestions){

        localStorage.setItem('mostRecentScore', score);
        //goto end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    
    //Question Counter
    progressText.innerText =`Questions : ${questionCounter}/${maxQuestions}`;

    // Progress Bar
    progressBarfull.style.width = `${(questionCounter/maxQuestions)*100}%`;


    const questionIndex = Math.floor(Math.random() * availableQuestions.length );
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionIndex,1);
    acceptingAnswers =true;
}

choices.forEach(choice =>{
    choice.addEventListener('click',e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer= selectedChoice.dataset['number'];

        const classToAplly = 
        selectedAnswer==currentQuestion.answer ? 'RightAnswer' :'WrongAnswer'; 

        if(classToAplly === 'RightAnswer'){
            incrementScore(rightAnswer);
        }
        
        //Below line for adding the classes after clicked the choices, those classes can change the background color of choices.
        selectedChoice.parentElement.classList.add(classToAplly);

        setTimeout(()=>{
                selectedChoice.parentElement.classList.remove(classToAplly);
                getNewQuestion();
        },1000)
        
    })
});

incrementScore = num =>{
    score+=num;
    scoreText.innerText = score;
}

startGame(); 