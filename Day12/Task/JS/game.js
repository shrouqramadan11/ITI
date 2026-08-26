let PlayerOneChoice = "Rock";
let PlayerTwoChoice = "Paper";

if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
  console.log("Player Two wins!");
} 
else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") {
  console.log("Player One wins!");
} 
else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
  console.log("Player One wins!");
}
 else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Scissors") {
  console.log("Player Two wins!");
}
 else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Rock") {
  console.log("Player Two wins!");
}
 else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper") {
  console.log("Player One wins!");
}
 else if (PlayerOneChoice === PlayerTwoChoice) {
  console.log("It's a tie!");
}
