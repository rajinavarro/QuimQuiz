const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore')
const congratsIcon = document.getElementById('congratsIcon');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;


if (mostRecentScore >= 90 && mostRecentScore < 100){
    congratsIcon.src = "./assets/Morty.png";
}

if (mostRecentScore >= 100 && mostRecentScore < 120){
    congratsIcon.src = "./assets/MortyTapaOlho.png";
}

if (mostRecentScore >= 120 && mostRecentScore <= 140){
    congratsIcon.src = "./assets/Rick.png";
}


if (mostRecentScore >= 150){
    congratsIcon.src = "./assets/Pickle RIck.png";
}
finalScore.innerText = mostRecentScore + '\nscores';
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./index.html');
    
};