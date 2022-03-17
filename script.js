const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('#play-btn');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const endBtn = document.querySelector('#end-btn');
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playBtn.addEventListener("click", () => {
            introScreen.style.opacity = "0";
            introScreen.style.pointerEvents = "none";
            introScreen.style.transition = "0.3s";
            match.style.opacity = "1";
            match.style.pointerEvents = "all";
            match.style.transition = "0.8s";

        });

        endBtn.addEventListener("click", () => {
            match.style.opacity = "0";
            match.style.pointerEvents = "none";
            match.style.transition = "0.3s";
            introScreen.style.opacity = "1";
            introScreen.style.pointerEvents = "all";
            introScreen.style.transition = "0.8s";
            playerScore.textContent = "0";
            computerScore.textContent = "0";
            pScore = 0;
            cScore = 0;
           
        })
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = '';
            });
        })

        //computer options
        const computerOptions = ['rock','paper','scissors'];

        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                pChoice = this.textContent;  
                
                //Update Images
                playerHand.src = `/RPS Game/resources/${this.textContent}.png`;
                computerHand.src = `/RPS Game/resources/${computerChoice}.png`;

                compareHands(pChoice,computerChoice);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        })  
    }

    const compareHands = (playerChoice,computerChoice) => {
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins'
                pScore++;
                updateScore();
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.innerText = pScore;
        computerScore.innerText = cScore;
    }

    startGame();
    playMatch();
};

game();