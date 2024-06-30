const score = JSON.parse(localStorage.getItem('score')) || {wins:0,losses:0,ties:0};


    
    updateScoreElement()

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === '🖐') {
        if (computerMove === '👊') {
          result = 'You Win.';
        }
        else if (computerMove === '🖐') {
          result = 'Tie.';
        }
        else if (computerMove === '✌') {
          result = 'You Lose.';
        }
      }
      else if (playerMove === '👊') {
        if (computerMove === '👊') {
          result = 'Tie.';
        }
        else if (computerMove === '🖐') {
          result = 'You Lose.';
        }
        else if (computerMove === '✌') {
          result = 'You Win.';
        }
      }
      else if (playerMove === '✌') {
        if (computerMove === '👊') {
          result = 'You Lose.';
        }
        else if (computerMove === '🖐') {
          result = 'You Win.';
        }
        else if (computerMove === '✌') {
          result = 'Tie.';
        }
      }

      if (result === 'You Win.') {
        score.wins += 1;
      } else if (result === 'You Lose.') {
        score.losses += 1;
      } else if (result === 'Tie.') {
        score.ties += 1;
      }
      
      localStorage.setItem('score', JSON.stringify(score));
      document.querySelector('.result').innerHTML = result ;

    document.querySelector('.moves').innerHTML = `😎 ${playerMove} - ${computerMove} 💻`


      updateScoreElement()
    }
    
    function updateScoreElement(){
      document.querySelector('.score').innerHTML=`Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      let computerMove = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = '👊'
      }
      else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = '🖐'
      }
      else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = '✌'
      }
      return computerMove;
    }
