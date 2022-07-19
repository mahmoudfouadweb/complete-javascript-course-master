'use strict';
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const num = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
console.log(score.textContent);
let myNum = Math.trunc(Math.random() * 20) + 1;
const guess = document.querySelector('.guess');

check.addEventListener('click', function () {
  let userNum = document.querySelector('.guess').value;
  let highScore = 0;
  // when no number intered
  if (!userNum) {
    message.textContent = `no number intered !! 💥`;
    console.log('no number intered');
    // when correct numer
  } else if (myNum == userNum) {
    message.textContent = `you are the WINNER 🏆🥇`;
    document.body.style.backgroundColor = 'green';
    score.textContent++;
    num.textContent = myNum;
    console.log('winner');
    if (score.textContent > highScore) {
      highScore = score.textContent;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when wrong number
  } else if (guess !== myNum) {
    if (score.textContent > 1) {
      message.textContent =
        userNum > myNum
          ? `you are Looser 😁  too high`
          : `you are Looser 😁  too low`;
      score.textContent--;
      document.body.style.backgroundColor = 'red';
    } else if (score.textContent < 1) {
      message.textContent = `Game Over`;
      score.textContent = 0;
    }
  }
  // } else if (myNum > userNum) {
  //   if (score.textContent > 1) {
  //     message.textContent = `you are Looser 😁  too low`;
  //     score.textContent--;
  //     console.log(`too low`);
  //     document.body.style.backgroundColor = 'red';
  //   } else {
  //     message.textContent = `Game Over`;
  //     score.textContent = 0;
  //   }
  // } else if (myNum < userNum) {
  //   if (score.textContent > 1) {
  //     message.textContent = `you are Looser 😁  too high`;
  //     document.body.style.backgroundColor = 'red';
  //     score.textContent--;
  //     console.log(`too high`);
  //   } else {
  //     message.textContent = `Game Over 😥`;
  //     document.body.style.backgroundColor = 'red';
  //     score.textContent = 0;
  //   }
  // }
});

again.addEventListener('click', function () {
  myNum = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  num.textContent = '?';
  score.textContent = '20';
  document.body.style.backgroundColor = '#222';
  guess.value = '';
});
