let start = confirm ("Are You Ready ?");
if  (start){
    let input = prompt ("Please enter Rock ,Paper , Scissors");
    if (input){
        let playerchoice = input.trim().toLowerCase();
        let player=(
            playerchoice === "rock" ||
            playerchoice === "paper" ||
            playerchoice === "scissors"
        )
        let computerchoice = Math.floor(Math.random()*3+1);
        let computer = (
            computerchoice === 1 ? "Rock":
            computerchoice === 2? "Paper": "Scissors"
        )

        let result = (
            playerchoice === computer ? "Tie Game" :
            (playerchoice === "rock" && computer === "Paper") ||
            (playerchoice === "paper" && computer === "Scissors") ||
            (playerchoice === "scissors" && computer === "Rock") ? `player: ${playerchoice}\nComputer: ${computer}\nComputer wins!`
            : `player: ${playerchoice}\nComputer: ${computer}\nYou win!`
        )
        

        alert(result);

        let playAgain = confirm("Do you want to play again?");
          (playAgain) ? location.reload() : alert ("Ok Nice playing");
            
        



        
    }
    else{
        alert ("Your mind has been changed ")
    }

}
else {
    alert ("Better Luck NexT time!1")
}