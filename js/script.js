let userChoice;
let robotChoice;
$(".play").click(function() {
  userChoice = $(".input").val();
   console.log(".userChoice");
  $(".userChoice").text(userChoice)
let robotChoice = Math.ceil(Math.random() * 3);
   $(".computerChoice").text(robotChoice)
  if (robotChoice === 1) {
    $(".computerChoice").text("rock");
  } else if (robotChoice === 2) {
    $(".computerChoice").text("sccisors");
  } else if (robotChoice === 3) {
    $(".computerChoice").text("paper");
  }
  
  if ($(".userChoice").val() === "paper" && $(".robotChoice").val() ==="rock") {
    $(".result").text("Your win");
  } else if ($(".userChoice").val() === "paper" && $(".robotChoice").val() ==="paper"){
    $(".result").text("Tie");
  } else if ($(".userChoice").val() === "paper" && $(".robotChoice").val() ==="sccisors") {
    $(".result").text("You Lose");
  }
  
  if ($(".userChoice").val() === "rock" && $(".robotChoice").val() ==="rock") {
    $(".result").text("Tie");
  } else if ($(".userChoice").val() === "rock" && $(".robotChoice").val() ==="paper"){
    $(".result").text("You Lose");
  } else if ($(".userChoice").val() === "rock" && $(".robotChoice").val() ==="sccisors") {
    $(".result").text("You Win");
  }
});



