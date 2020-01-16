const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull')

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions1 = [
    {
        question: 'Carbono - 11 é utilizado na medicina para diagnóstico por imagem. Amostras de compostos contendo:',
        choice1: '1,1%',
        choice2: '3,1%',
        choice3: '12%',
        choice4: '50%',
        answer: 1
    },
    {
        question: 'Meu nome é?',
        choice1: 'Jõao',
        choice2: 'Carlinhos',
        choice3: 'Raji',
        choice4: 'Adylson',
        answer: 4
    },
    {
        question: '2,50 R$ + 2,50 R$ = ?',
        choice1: '6,00 R$',
        choice2: '8,00 R$',
        choice3: '5,00 R$',
        choice4: '1,00 g',
        answer: 4
    },
    {
        question: ' "A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil." Sobre qual assunto Dilmãe está falando? ',
        choice1: 'A lua é redonda',
        choice2: 'Estocagem de vento',
        choice3: '1 + 1 = 3',
        choice4: 'Zona franca de Manaus',
        answer: 2
    }
    
];


let questions2 = [
    {
        question: 'Carbono - 11 é utilizado na medicina para diagnóstico por imagem. Amostras de compostos contendo:',
        choice1: '1,1%',
        choice2: '3,1%',
        choice3: '12%',
        choice4: '50%',
        answer: 1
    },
    {
        question: 'Meu nome é?',
        choice1: 'Jõao',
        choice2: 'Carlinhos',
        choice3: 'Raji',
        choice4: 'Adylson',
        answer: 4
    },
    {
        question: '2,50 R$ + 2,50 R$ = ?',
        choice1: '6,00 R$',
        choice2: '8,00 R$',
        choice3: '5,00 R$',
        choice4: '1,00 g',
        answer: 4
    },
    {
        question: ' "A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil." Sobre qual assunto Dilmãe está falando? ',
        choice1: 'A lua é redonda',
        choice2: 'Estocagem de vento',
        choice3: '1 + 1 = 3',
        choice4: 'Zona franca de Manaus',
        answer: 2
    }
    
];
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions1];
    getNewQuestion();
};

startGame2 = () => {
    questionCounter = 0;
    score = parseInt(localStorage.getItem('mostRecentScore', score));
    availableQuestions = [...questions2];
    questionCounter = 0;
    getNewQuestion();
};
getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        //startGame2();
        return window.location.assign("C:\\Users\\raji\\Desktop\\QuimQuiz\\end.html");
    
    }

    questionCounter++;
    progressText.innerText = 'Question ' + questionCounter +'/' + MAX_QUESTIONS;
    // Update the progress bar
    progressBarFull.style.width = ((questionCounter / MAX_QUESTIONS) * 100 + '%');

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {

        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1300);
        
        
        console.log(selectedAnswer, currentQuestion.answer);
        
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();