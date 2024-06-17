let start = confirm('Ready to play??');
if (start) {
    let input = prompt("Please enter Rock, Paper, or Scissors");
    if (input) {
        let playerchoice = input.trim().toLowerCase();
        if (
            playerchoice === "rock" ||
            playerchoice === "paper" ||
            playerchoice === "scissors"
        ) {
            let computerchoice = Math.floor(Math.random() * 3) + 1;
            let computer =
                computerchoice === 1 ? "Rock" :
                computerchoice === 2 ? "Paper" : "Scissors";

            let result =
                playerchoice === computer ? "Tie Game" :
                (playerchoice === "rock" && computer === "Paper") ||
                (playerchoice === "paper" && computer === "Scissors") ||
                (playerchoice === "scissors" && computer === "Rock") ? "Computer Win!" :
                "You Win!";
            alert(result);

            let playAgain = confirm("Play Again?");
            if (playAgain) {
                location.reload();
            } else {
                alert("Thanks for playing!");
            }
        } else {
            alert("Invalid input. Please enter Rock, Paper, or Scissors.");
        }
    } else {
        alert("Your mindset has been changed.");
    }
} else {
    alert("Better luck next time!");
}
