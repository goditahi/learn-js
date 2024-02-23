let choices = document.querySelectorAll(".choice");
let userText = document.querySelector("#user-score");
let computerText = document.querySelector("#comp-score");
let message = document.querySelector("#msg");


let useScore = 0;
let computerScore = 0;

const randomComputerChoices = () => {
  let a = ["rock", "paper", "scissor"];
  let ind = Math.floor(Math.random() * 3);
  return a[ind];
};

const draw = () => {
  message.textContent = `draw`;
  message.style.backgroundColor = "yellow";
};

const showWinner = (isWin, userChoice, compChoice) => {
  if (isWin) {
    useScore = useScore + 1;
    userText.textContent = useScore;
    message.textContent = `You win || ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "Green";
  } else {
    computerScore = computerScore + 1;
    computerText.textContent = computerScore;
    message.textContent = `You lose || ${compChoice} beats ${userChoice}`;
    message.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  let computerChoice = randomComputerChoices();

  if (userChoice === computerChoice) draw();
  else {
    let isWin = true;

    if (userChoice === "rock") {
      isWin = computerChoice === "paper" ? false : true;
      //   console.log(isWin, userChoice, computerChoice);
    } else if (userChoice === "paper") {
      isWin = computerChoice === "scissor" ? false : true;
      console.log(isWin, userChoice, computerChoice);
    } else {
      isWin = computerChoice === "rock" ? false : true;
      console.log(isWin, userChoice, computerChoice);
    }
    showWinner(isWin, userChoice, computerChoice);
  }
};

// const restart = () => {
//   if (computerScore === 5) {
//     message.textContent = `You Lose This Round`;
//     useScore = 0;
//     computerScore = 0;
//     userText.textContent = 0;
//     computerText.textContent = 0;
//     message.textContent = "Play your move";
//     message.style.backgroundColor = "#081b31";
//   } else if (useScore === 5) {
//     message.textContent = `You Win This Round`;
//     useScore = 0;
//     computerScore = 0;
//     userText.textContent = 0;
//     computerText.textContent = 0;
//     message.textContent = "Play your move";
//     message.style.backgroundColor = "#081b31";
//   }
  
// };

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.id);
  });
});
