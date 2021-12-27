'use strict';
let secretNumber = Math.round(Math.random() * 20) + 1;
let score = 20;
let hscore = 0;
let won = 0; //1 if the use won the game
document.querySelector('.check').addEventListener('click', function () {
  const x = document.querySelector('.guess').value;
  //     console.log(Number(x));
  let difference = Math.abs(Number(x) - secretNumber);

  if (score != 0 && !won) {
    if (!x) {
      document.querySelector('.message').textContent =
        'Please enter a number first!';
      score -= 1;
      console.log('enter number');
    } else if (!(Number(x) > 0 && Number(x) < 21)) {
      document.querySelector('.message').textContent =
        'Enter a number between 1 and 20!';
      score -= 1;
    } else if (Number(x) === secretNumber) {
      document.querySelector('.message').textContent =
        'Yay! You guessed it right!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      won = 1;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      // document.querySelector('.');
    } else if (difference < 3) {
      document.querySelector('.message').textContent = 'You are very close.';
      score -= 1;
    } else if (difference >= 3) {
      document.querySelector('.message').textContent = 'Too far!';
      score -= 1;
    }
    document.querySelector('.score').textContent = score;
    if (won == 1) {
      //   console.log(document.querySelector('.highscore').value);
      //   document.querySelector('.highscore').textContent = score;
      if (hscore < score) {
        document.querySelector('.highscore').textContent = score;
        hscore = score;
      }
    }

    //   console.log(document.querySelector('.highscore').textContent);
    if (score == 0 && won == 0) {
      document.querySelector('.message').textContent = 'You lost! Try Again.';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.again').textContent = 'Try again!';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.round(Math.random() * 20);
  document.querySelector('.guess').disabled = false;
  if (won == 0 && score == 0) {
    document.querySelector('.again').textContent = 'Reset';
  }
  won = 0;
  document.querySelector('body').style.background = 'black';
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 'blank';
});
