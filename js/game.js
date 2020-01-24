const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const progressBarinnerHtml = document.getElementsByClassName('progressBar');
const navbarInnerHtml = document.getElementsByClassName('navbar');
const choiceContainerInnerHtml = document.getElementsByClassName('choice-container');
console.log(navbarInnerHtml);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


// Hardcoded
let questions = [
    {
        question: 'Uma reação química que apresenta diminuição da sua energia de ativação, provocada por uma das substâncias formadas a partir dos reagentes, deve ser denominada:', 
        
        choice1: 'catálise heterogênea', 
        choice2: 'catálise homogênea',
        choice3: 'autocatálise', 
        choice4: 'catálise', 
        
        answer: 3
        },
          
        {
        question: 'Cada vez mais, estão sendo utilizadas substâncias que favorecem o aumento da velocidade de reações químicas. Isso traz uma série de benefícios para a empresa produtora, pois torna possível acelerar a produção, com uma fabricação mais limpa e barata e com processos feitos em temperaturas e pressões menores. Sem essas substâncias, muitas reações ocorrem bem lentamente em temperatura e pressão ambiente. Quais são essas substâncias?', 
        
        choice1: 'Inibidores', 
        
        choice2: 'Venenos', 
        
        choice3: 'Destruidores', 
        
        choice4: 'Catalisadores', 
         
        answer: 4
        },
        {
        question: 'Nas indústrias químicas, os catalisadores são utilizados em larga escala, sendo responsáveis por inúmeros processos econômicos empregados na obtenção de bens de consumo importantes para o homem moderno. Podemos afirmar que, nas reações em que atuam, os catalisadores:',
        
        choice1: 'aumentam a energia de ativação necessária para a reação', 
        choice2: 'diminuem a variação de entalpia do sistema', 
        choice3: 'atuam somente entre substâncias em solução', 
        choice4: 'diminuem a energia de ativação necessária para a reação', 
        
        answer: 4
        
        }, 
        
        {
        
        question: 'O titânio é um metal utilizado na fabricação de motores de avião e pinos para prótese. Quantos elétrons há no último nível da configuração eletrônica desse metal? Dado: Ti (Z =22)',  
        
        choice1:'6', 
        choice2:'5', 
        choice3: '4', 
        choice4: '2', 
        answer: 4
        },
        
        {
        
        question: 'As chuvas ácidas podem ter diferentes composições dependendo do local onde são formadas, as mais nocivas são formadas em grandes centros industriais, onde há queima de combustíveis fósseis (gasolina, óleo diesel). Esse tipo de chuva é carregado de poluentes, marque a opção que traz os compostos que a torna nociva à saúde', 
        choice1: 'óxidos de carbono (CO, CO2)', 
        choice2: 'óxidos de cálcio (CaO, CaO2)', 
        choice3: 'óxidos de enxofre (SO2, SO3)', 
        choice4: 'óxidos de nitrogênio (NO, NO2)',
         
        answer: 3
        
        },
        {
         
        question: "A chuva ácida pode ser formada em ambientes com relâmpagos ou com grande quantidade de veículos com motores de explosão, através da equação: \n\n2 NO + H2O → HNO2 + HNO3\n\nEscolha, dentre as alternativas a seguir, aquela que identifica o óxido responsável por esse tipo de chuva ácida:", 
        
        choice1: 'dióxido de nitrogênio (NO2)', 
        choice2: 'dióxido de carbono (CO2)', 
        choice3: 'dióxido de enxofre (SO2)', 
        choice4: 'trióxido de enxofre (SO3)', 
        
        answer: 1  
        
        },
        
        {
        question: 'A vitamina C é importante para o nosso cérebro, pois tem ação antioxidante. Ela contém vários grupos hidroxila, por isso, é solúvel em água. Em um laboratório, ao serem realizados alguns testes, comprimidos contendo vitamina C são dissolvidos em água suficiente para formar uma solução homogênea. Esse sistema, uma vez formado, será separado posteriormente por meio de:', 
        
        choice1: 'destilação fracionada', 
        choice2: 'sublimação', 
        choice3: 'destilação simples', 
        choice4: 'decantação', 
        
        answer: 3   
        
        },
        
        { 
        
        question: 'O hidrogênio está sendo exaustivamente pesquisado como fonte de energia. Qual dos processos abaixo você julga mais conveniente para a obtenção dessa substância?', 
        
        choice1: 'Liquefação e destilação fracionada do ar', 
        choice2: 'Eletrólise da água', 
        choice3: 'Decomposição da água oxigenada', 
        choice4: 'Destilação do petróleo', 
        
        answer: 3  
         
        }
    
];

let questions2 = [
    {

        question: 'Dadas as configurações eletrônicas dos seguintes átomos no seu estado fundamental: \n\nI. 1s2 2s2 2p63s2 3p6\nII. 1s2 2s2 2p63s2\nIII. 1s2 2s2 2p6 3s2 3p6 4s1\nIV. 1s2 2s2 2p63s2 3p5.\nÉ ERRADO afirmar que: \n', 
        
        choice1: 'Dentre os átomos acima, o átomo I tem o maior potencial de ionização',
        choice2: 'A perda de dois elétrons pelo átomo II leva à formação do cátion Mg2+',
        choice3: 'Dentre os átomos acima, o átomo III tem a maior afinidade eletrônica',
        choice4: 'O ganho de um elétron pelo átomo IV ocorre com a liberação de energia',
         
        answer: 3
        
        },
        
        {
        
        question: 'Pode-se esperar que seja formado um composto iônico quando um elemento de natureza metálica se combina com outro elemento de:',
        
        choice1: 'elevada eletropositividade',
        choice2: 'baixa energia de ionização',
        choice3: 'elevado número atômico',
        choice4: 'elevada afinidade eletrônica',
        
        answer: 4
        
        },
        
        {
        question: 'Marque a alternativa que não corresponde a uma propriedade dos ácidos:', 
        
        choice1: 'Formam soluções aquosas condutoras de eletricidade',
        choice2: 'Reagem com muitos metais, produzindo gás hidrogênio',
        choice3: 'Reagem com carbonatos e bicarbonatos, liberando gás carbônico',
        choice4: 'Tornam a solução de fenolftaleína vermelha',
        
        answer: 3
        
        },
        
        {
        
        question: 'Um mol de um determinado hidrocarboneto cíclico saturado, de fórmula C4H8, reage com um mol de bromo (Br2), formando um único produto. Qual é o nome do produto formado?',
        
        
        choice1: '2-bromo-1-metil-propano', 
        choice2: '1-bromo-2-metil-propano',
        choice3: '1,2-dibromo-butano',
        choice4: '1,4-dibromo-butano',
        
        answer: 4
        
        },
        
        { 
        
        question: 'Considerando as seguintes aminas:\n\nI) Metilamina\nII) Dimetilamina\nIII) Fenilamina\n\nEscolha a alternativa que indica a ordem decrescente de basicidade:', 
        
        choice1: 'II > I > III',
        choice2: 'III > II > I',
        choice3: 'I > II > III',
        choice4: 'III > I > II',
        
        answer: 1 
        
        },
        
        {
        
        question: 'Qual dos compostos abaixo é mais solúvel em água?',
        
        choice1: 'Pentano',
        choice2: 'Éter comum',
        choice3: 'Metanol',
        choice4: 'Tetracloreto de carbono',
        
        answer: 3 
        
        },
        
        {
        
        question: 'Dadas as moléculas a seguir:\n\nI- BeCl2\n\nII- H2 O\n\nIII- CCl4\n\nIV- CO2\n\nQual delas é considerada polar?\n',
        
        choice1: 'I',
        choice2: 'II',
        choice3: 'III',
        choice4: 'IV',
        
        answer: 2
        
        },
        
        { 
        
        question: 'Analise as seguintes informações:\nI. A molécula CO2 é apolar, sendo formada por ligações covalentes polares.\nII. A molécula H2O é polar, sendo formada por ligações covalentes apolares.\nIII. A molécula NH3 é polar, sendo formada por ligações iônicas. Concluiu-se que:', 
        
        choice1: 'somente I é correta.',
        choice2: 'somente II é correta.',
        choice3: 'somente III é correta.',
        choice4: 'somente II e III são corretas.',
        
        answer: 1 
        
        },
        
        { 
        
        question: 'As propriedades coligativas das soluções dependem:',
        
        choice1: 'Da pressão máxima de vapor do líquido.',
        choice2: 'Da natureza das partículas dispersas na solução.',
        choice3: 'Da natureza do solvente, somente.',
        choice4: ' Do número de partículas dispersas na solução.',
        
        answer: 3
        
        },
        
        { 
        
        question: 'Constituem propriedades aperiódicas dos elementos:',
        
        choice1: 'densidade, volume atômico e massa atômica.',
        choice2: 'ponto de fusão, eletronegatividade e calor específico.',
        choice3: 'volume atômico, massa atômica e ponto de fusão.',
        choice4: 'massa atômica e calor específico.',
        
        answer: 4
        
        }
];

let questions3 = [
    {

        question: 'Sob condições apropriadas, gás acetileno (C2H2(g)) e ácido clorídrico reagem para formar cloreto de vinila, C2H3Cl(g). Essa substância é usada para produzir policloreto de vinila (P.V.C.) – plástico – e foi considerada recentemente carcinogênica. A reação na formação do C2H3Cl pode ser representada pela equação:\n\nC2H2(g) + 1 HCl(aq) → C2H3Cl(g)\n\nQuando se obtêm 2 mol de cloreto de vinila, o volume de gás acetileno consumido, nas CNTP (0ºC e 1 atm), é igual a:\n',
        
        choice1: '11,2 L',
        choice2: '22,4 L',
        choice3: '33,6 L',
        choice4: '44,8 L',
        
        answer: 4 
        
        },
        
        { 
        
        question: 'O gás oxigênio (O2), quando submetido a faíscas elétricas, é transformado em gás ozônio (O3), de acordo com a equação:\n\n3 O2(g) → 2 O3(g)\n\nSe submetermos 60 L de O2 a esse processo, obteremos qual volume de O3 nas CNTP?\n',
        
        choice1: '60 L.',
        choice2: '40 L.',
        choice3: '30 L.',
        choice4: '20 L.',
        
        answer: 2 
        
        },
        
        {
        
        question: ' A titulação é um procedimento laboratorial que permite determinar a concentração desconhecida de uma substância a partir de uma substância de concentração conhecida. Em uma titulação representada pela equação:\n\nNaOH(aq) + HCl(aq) → NaCl(aq) + H2O(l),\n\no equipamento usado para adicionar cuidadosamente o volume adequado da solução de NaOH é denominado:\n',
        
        choice1: 'pipeta graduada.',
        choice2: 'proveta.',
        choice3: 'bureta.',
        choice4: 'pipeta volumétrica.',
        
        answer: 2 
        
        },
        
        { 
        
        question: 'Quando um soluto é dissolvido em água, a primeira etapa é a separação de seus íons que estão num retículo cristalino. Para romper as ligações entre os íons, é necessário fornecer energia ao sistema. Depois da separação, os íons são envolvidos pelas moléculas do solvente. Os dipolos da água são atraídos, respectivamente, pelos íons de carga oposta. Assim, para que haja essa interação, é necessária a liberação de energia. Essa energia liberada é chamada de:',
        
        choice1: 'Entalpia de formação',
        choice2: 'Entalpia de hidratação',
        choice3: 'Entalpia de cristalização',
        choice4: 'Entalpia reticular',
        
        
        answer: 2 
        
        },
        
        { 
        
        question: 'Durante uma viagem, um motorista necessitou verificar a pressão e a temperatura dos pneus do veículo. Constatou que a pressão era de 0,4 atm, enquanto a temperatura era de 75 oC. Determine os valores de pressão e temperatura em KPa e Fahrenheit, respectivamente.',
        
        choice1: '54,03 KPa e 167oF',
        choice2: '35,04 KPa e 761oF',
        choice3: '0,453 KPa e 617oF',
        choice4: '40,53 KPa e 167oF',
        
        answer: 4
        
        },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html')
    }
    
    if((questionCounter == 5 && score < 30) || (questionCounter == 10 && score < 60) || (questionCounter == 15 && score < 90)){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("./gameover.html");
    }
    if(score >= 30 &&  questionCounter == 5){
        document.documentElement.style.setProperty('--main-color', '#E8AE31');
        console.log('Congrats for the first level');
    }
    if(score >= 60 && questionCounter ==10){
        document.documentElement.style.setProperty('--main-color', '#FF694F');
        console.log('Congrats for the second level');
    }
    if(score >= 90 && questionCounter ==15){
        console.log('Congrats for the third level');
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
    if (questionCounter == 5){
        console.log('level 2');
        
        availableQuestions = [...questions2];
        

    }
    if (questionCounter == 10){
        console.log('level 3');
        availableQuestions = [...questions3];
    }
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
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();