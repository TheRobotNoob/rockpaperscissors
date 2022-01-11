let userChoice;
let robotChoice;
let computerChoice
$(".play").click(function() {
  userChoice = $(".input").val().toLowerCase();
   console.log(".userChoice");
  $(".userChoice").text(userChoice)
  
  //Defining RobotChoice based on number
function robotChoice() {
   let robotChoice = Math.ceil(Math.random() * 3);
   $(".computerChoice").text(robotChoice)
  
  if (robotChoice === 1) {
    computerChoice = "rock";
    $(".computerChoice").text("rock");
  } else if (robotChoice === 2) {
    computerChoice = "scissors"
    $(".computerChoice").text("scissors");
  } else if (robotChoice === 3) {
    computerChoice = "paper"
    $(".computerChoice").text("paper");
  }
  return robotChoice;
}
  
  computerChoice = robotChoice();
  //$(".computerChoice").text(computerChoice)
  $(".result").text("rock")
  
  //Choosing winner
  if (userChoice === "paper" && computerChoice === "rock"){
    $(".result").text("Your win"); 
  } else if (userChoice === "paper" && computerChoice === "paper"){
    $(".result").text("Tie");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    $(".result").text("You Lose");
  }
  
  if (userChoice === "rock" && computerChoice === "rock") {
    $(".result").text("Tie");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    $(".result").text("You Lose");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    $(".result").text("You Win");
  }
  
    if (userChoice === "scissors" && computerChoice === "scissors") {
    $(".result").text("Tie");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    $(".result").text("You Lose");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    $(".result").text("You Win");
  }
});




