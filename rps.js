function getComputerChoice(){
  const computerOptions = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[random]
}

const playerSelection = prompt("Which do you want to choose? rock, paper or scissors").toLowerCase();
const computerSelection = getComputerChoice()

const game = (ps,cs) => {
    switch (ps) {
        case "rock":
            if(cs == "paper"){
                return `You lose, ${cs} beats ${ps}`;
            }
            if(cs == "scissors"){
                return `You win, ${ps} beats ${cs}`;
            }
            if(cs == "rock"){
                return "This is a tie!, Play again?"
            }
            break;
        case "paper":
            if(cs == "scissors"){
                return `You lose, ${cs} beats ${ps}`;
            }
            if(cs =="rock"){
                return `You win, ${ps} beats ${cs}`;
            }
            if(cs == "paper"){
                return "This is a tie!, Play again?"
            }
            break;
        case "scissors":
            if(cs == "rock"){
                return `You lose, ${cs} beats ${ps}`;
            }
            if(cs == "paper"){
                return `You win, ${ps} beats ${cs}`;
            }
            if(cs =="scissors"){
                return "This is a tie!, Play again?"
            }
            break;
    }
}

console.log(game(playerSelection,computerSelection));

