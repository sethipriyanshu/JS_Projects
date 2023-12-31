function getComputerChoice(){
    const array =["rock","paper","scissors"];
    const selection = array[Math.floor(Math.random()*3)];
    return selection;
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result = "playGame error";
    if(playerSelection == computerSelection){
        result = "There is a Tie";
    }
    else{
        if(playerSelection == "rock"){
            if(computerSelection =="paper"){
                result = "You Lose! Paper beats Rock";
            }
            else if(computerSelection == "scissors"){
                result = "You Win! Rock beats Scissors";
            }
        } 
        if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                result = "You Win! Paper beats Rock";
            }
            else if(computerSelection == "scissors"){
                result = "You Lose! Scissors beat Paper";
            }
        }
        if(playerSelection == "scissors"){
            if(computerSelection == "rock"){
                result = "You Lose! Rock beats Scissors";
            }
            else if(computerSelection == "paper"){
                result = "You Win! Scissors beat Paper";
            }
        }
    }
    return result;

}

function game(){
    let cscore = 0;
    let pscore = 0;
    for(let i = 0; i<5;i++){
        let playerchoice = prompt("Choose rock / paper / scissors");
        let compchoice = getComputerChoice();
        let result = playGame(playerchoice,compchoice);
        console.log(result);
    }
}

// things to fix
// game replay on tie
// scoring system add