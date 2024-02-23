let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreDisplay = document.querySelector(".user-score");
let compScoreDisplay = document.querySelector(".comp-score");

let userScore=0;
let compScore=0;

const genCompChoice = ()=>{
    const arr = ["rock","paper","scissor"];
    const randChoice = Math.floor(Math.random()*3);
    return arr[randChoice];
}

const showDraw=()=>{
    msg.innerText ="Its a draw!!";
    msg.style.backgroundColor="var(--heading-bg-color)";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText = `You win!!Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScoreDisplay.innerText = compScore;
        msg.innerText = `You Lose!!${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor ="red";
    }
}
const playGame = (userChoice)=>{
    let compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        showDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper scissor
            userWin= compChoice==="scissor"?true:false;
        }
        else if(userChoice === "paper"){
            //rock scissor
            userWin= compChoice==="rock"?true:false;
        }
        else{
            //user-scissor
            //paper rock
            userWin= compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})