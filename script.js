let choices = ["rock", "paper", "scissors"];

//computer choice
function computerPlay(arr) {
    let compChoice = Math.floor(Math.random() * arr.length);
    return arr[compChoice];
}



//round play
function playRound (playerSelection, computerSelection) {
    console.log("This is the computer choice: " + computerSelection);
    console.log("This is the player choice: " + playerSelection);
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        if(playerSelection === computerSelection) {
            return("tie")
        } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
            return("player")
        } else {
            return("computer")
        }
    } else {
        alert("Refresh Page and enter a valid response");
    }
}

let counter = 0;
let computer = 0;
let user = 0;
let ties = 0;



//game with 5 rounds
function game() {
    for(let i = 0; i < 5; i++) {
        //regExp producing user choice.
        let mushedChoices = "rockpaperscissors"
        let initialChoice = prompt("Please choose rock/paper/scissors");
        let regUserChoice = new RegExp(initialChoice, 'i');
        let userChoice = mushedChoices.match(regUserChoice)


        if(counter < 5) {
            let result = playRound(userChoice[0],computerPlay(choices));    
            if(result == "tie") {
                counter++;
                ties++;
                console.log("It's a tie. Please try again")

            } else if (result == "player") {
                counter++;
                user++;
                console.log("Player wins!")
            } else {
                counter++;
                computer++;
                console.log("Computer wins!")
            }
        }

        console.log("Games Played: " + counter);
        console.log("Player wins: " + user);
        console.log("Computer wins: " + computer);
        console.log("Ties: " + ties);
    }
            console.log("Game over! Refresh to start again")
}

game();