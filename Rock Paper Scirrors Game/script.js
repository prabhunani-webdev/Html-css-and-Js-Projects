console.log("Nani Shree");
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msgPara = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// const aiChoice = document.querySelector("#aiChoice");

const computerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    if (randIdx == 0) {
        console.log("rock");
        // aiChoice.innerText = "Rock"  
    }
    if (randIdx == 1) {
        console.log("Paper"); 
        // aiChoice.innerText = "Paper" 
    }
    if (randIdx == 2) {
        console.log("Scissors"); 
        // aiChoice.innerText = "Scissors" 
    }
    
    return options[randIdx] ;
    
}

const drawGame = () =>{
    msgPara.innerText = "Game is Draw, Play Again"; 
    msgPara.style.backgroundColor = '#081b31' 
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msgPara.innerText = `You Won : Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = 'green'
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msgPara.innerText = ` You lost : ${compChoice} beats Your ${userChoice}`;
        msgPara.style.backgroundColor = 'red'
    }
}
const playGame = (userChoice) =>{
    
    const compChoice = computerChoice();

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === 'rock'){
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === 'paper'){
          userWin =  compChoice === 'scissors' ? false : true
        } else {
          userWin =  compChoice === 'rock' ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice);
    })
})
// const aiPick = () => {
//     if (randIdx == 0) {
//         console.log("rock");
//         aiChoice.innerText += "Rock"  
//     }
//     else if (randIdx == 1) {
//         console.log("Paper"); 
//         aiChoice.innerText += "Paper"
//     }
//     else {
//         console.log("Scissors"); 
//         aiChoice.innerText += "Scissors"
//     }
// }
// aiPick();