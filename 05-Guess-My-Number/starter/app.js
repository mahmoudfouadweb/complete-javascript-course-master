function app() {
  const secretNumber = Math.floor(Math.random() * 20);
  let score = document.querySelector('.score');
  console.log('scor is: ' + score);
  const number = document.querySelector('.number');
  // function to display a message
  function displayMessage(message) {
    return (document.querySelector('.message').textContent = message);
  }
  function bgColor(backgroundColor) {
    return (document.body.style.backgroundColor = backgroundColor);
  }
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(`user nuber is : ` + guess);
    let highscore = 0;
    const hiddenNumber = number.textContent;
    console.log(`secret number is: ` + secretNumber);
    bgColor(guess === secretNumber ? 'green' : 'red');
    displayMessage(
      guess < secretNumber ? `Number is too low` : `Number is too high`
    );
    if (guess === secretNumber) {
      displayMessage('Number is Correct you Wins');
      score.textContent++;
      if (highscore < score.textContent) {
        highscore = score.textContent;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (!guess) {
      displayMessage('Please Enter a Number ..!');
    } else if (guess !== secretNumber) {
      score.textContent--;
      if (score.textContent < 1) {
        displayMessage('Game Over');
        score = 0;
      }
    }
  });
  // reset the game without lost the highest score
  document.querySelector('.again').addEventListener('click', function () {
    score.textContent = 20;
    bgColor('#222');
    displayMessage('Start guessing...');
    number.textContent = '?';
  });
}
app();

// function to genrate a random Number
function randomy() {
  return Math.trunc(Math.random() * 20) + 1;
}
