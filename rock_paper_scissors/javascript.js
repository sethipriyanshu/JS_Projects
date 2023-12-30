function getComputerChoice(){
    const array =["rock","paper","scissors"];
    const selection = array[Math.floor(Math.random()*3)];
    return selection;
}
