// counting wins, losses and ties
let counter = 0;
let computer = 0;
let user = 0;
let ties = 0;
let userChoice;
let choices = ["Rock", "Paper", "Scissors"];
let madeChoice = false;

// ---------additions to the DOM-------
const container = document.querySelector('#container');
const body = document.querySelector('body');
let content = document.createElement('div');
content.classList.toggle('content');
content.setAttribute('style', 'white-space: pre;')
content.textContent = `\nGames Played: ${counter} \nPlayer wins: ${user} \nComputer wins: ${computer} \nTies: ${ties}`;
container.appendChild(content);
const startGame = document.createElement('div');
startGame.textContent = 'Choose your weapon';
const divCompImage = document.createElement('div');
divCompImage.textContent = 'Computer Choice'
const compImage = document.createElement('img');
compImage.setAttribute('id', 'compImage');
divCompImage.appendChild(compImage);
divCompImage.classList.toggle('compImage')
const win = document.createElement('div');
win.textContent = 'Congratulations Champion! Thanks to you Alice is now on her way out the Rabbit hole. \nIf you wish to play again, please refresh the page. \nGood Luck, Champion';
const lose = document.createElement('div');
lose.textContent = 'Oh No, You failed to get Alice out of her trouble. \nQuick! Refresh right away, so you can try once more to beat the evil Queen and set Alice free.'



// ------------functionality-----------

//user choice

const allBtns = document.querySelectorAll('img');
allBtns.forEach(button => {
    button.addEventListener('click', (e) => {userChoice = e.target.alt ; console.log(userChoice); madeChoice = true;  game();});
});


//computer choice

function computerPlay(arr) {
    let compChoice = Math.floor(Math.random() * arr.length);
    if(arr[compChoice] == 'Rock') {
        compImage.setAttribute('src', './images/rock.png');
    }else if(arr[compChoice] == 'Paper') {
        compImage.setAttribute('src', './images/paper.png');
    }else{compImage.setAttribute('src', './images/scissors.png')};
    container.appendChild(divCompImage);
    return arr[compChoice];
}



//round play

function playRound (playerSelection, computerSelection) {
    if(playerSelection == false) {
        console.log("This is the computer choice: " + computerSelection);
        console.log("This is the player choice: " + playerSelection);
        content.appendChild(startGame);

    }
    else if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
        if(playerSelection === computerSelection) {
            playerSelection = undefined;
            return("tie")
        } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
            playerSelection = undefined;
            return("player")
        } else {
            playerSelection = undefined;
            return("computer")
        }
    } //else {
    //     alert("Refresh Page and enter a valid response");
    // }
}





//game with 5 rounds
function game() {
    for(let i = 0; i < Infinity; i++) {
        //regExp producing user choice if entered manually
        // let mushedChoices = "rockpaperscissors"
        // let initialChoice = prompt("Please choose rock/paper/scissors");
        // let regUserChoice = new RegExp(initialChoice, 'i');
        // let userChoice = mushedChoices.match(regUserChoice)
        
        if(user > 5){
            break;
        } else if(computer > 5){
            break;
        }
        else if(user < 5 && computer < 5 && madeChoice == true) {
            let result = playRound(userChoice,computerPlay(choices));    
            if(result == "tie") {
                counter++;
                ties++;
                console.log("It's a tie. Please try again")
                madeChoice = false;
                content.textContent = `Games Played: ${counter} \nPlayer wins: ${user} \nComputer wins: ${computer} \nTies: ${ties}`;
                break;

            } else if (result == "player") {
                counter++;
                user++;
                if(user == 5){
                    body.style.cssText = 'background-image: url(./images/free-alice.jpg);';
                    body.removeChild(container);
                    win.style.color = '#000066';
                    win.style.fontSize = '46px';
                    body.appendChild(win);
                    break;
                } 
                console.log("Player wins!")
                madeChoice = false;
                content.textContent = `Games Played: ${counter} \nPlayer wins: ${user} \nComputer wins: ${computer} \nTies: ${ties}`;
                break;
            } else if(result == 'computer') {
                counter++;
                computer++;
                if(computer == 5){
                    body.style.cssText = 'background-image: url(./images/jail-alice.jpg);';
                    body.removeChild(container);
                    body.appendChild(lose);
                    break;
                }
                console.log("Computer wins!")
                madeChoice = false;
                content.textContent = `Games Played: ${counter} \nPlayer wins: ${user} \nComputer wins: ${computer} \nTies: ${ties}`;
                break;
            }
        } 
        
        console.log("Games Played: " + counter);
        console.log("Player wins: " + user);
        console.log("Computer wins: " + computer);
        console.log("Ties: " + ties);
    }
        console.log("Game over! Refresh to start again")
}





