function getComputerChoice(){
    const array =["rock","paper","scissors"];
    const selection = array[Math.floor(Math.random()*3)];
    return selection;
}

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        console.log("There is a Tie");
        return -1;
    }
    else{
        if(playerSelection == "rock"){
            if(computerSelection =="paper"){
                console.log("You Lose! Paper beats Rock")
                return 0;
            }
            else if(computerSelection == "scissors"){
                console.log("You Win! Rock beats Scissors");
                return 1;
            }
        } 
        if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                console.log("You Win! Paper beats Rock");
                return 1;
            }
            else if(computerSelection == "scissors"){
                console.log("You Lose! Scissors beat Paper");
                return 0;
            }
        }
        if(playerSelection == "scissors"){
            if(computerSelection == "rock"){
                console.log("You Lose! Rock beats Scissors");
                return 0;
            }
            else if(computerSelection == "paper"){
                console.log("You Win! Scissors beat Paper");
                return 1;
            }
        }
    }

}

/**function game(){
    let cscore = 0;
    let pscore = 0;
    for(let i = 0; i<5;i++){
        let playerchoice = prompt("Choose rock / paper / scissors");
        let compchoice = getComputerChoice();
        let result = playGame(playerchoice,compchoice);
        console.log(result);
    }
}
*/
 function game(){
    let cscore = 0;
    let pscore = 0;
    while(cscore <3 && pscore<3){
        let playerchoice = prompt("Choose rock / paper / scissors");
        let compchoice = getComputerChoice();
        let result = playGame(playerchoice,compchoice);
        if(result == 0){
            cscore++;
        }
        else if(result == 1){
            pscore++;
        }
        console.log("Your Score is" +" " +pscore +","+ "Computer Score is" + "" + cscore);
    }
    if(pscore == 3){
        console.log("YOU WIN!");
    }
    else if(cscore == 3){
        console.log("COMPUTER WINS");
    }
 }

// things to fix
// game replay on tie
// scoring system add