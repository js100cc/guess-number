function guessNum() {
  let randomNum = Math.floor(Math.random() * 100);
  let isContinue;

  let num = parseInt(prompt('Input a number(0-99)'));
  while (true) {
    while (true) {
      if (!Number.isInteger(num)) {
        num = parseInt(prompt('Not a valid integer! Guess again'));
      } else {
        break;
      }
    }
    if (num < randomNum) {
      num = parseInt(prompt('Too Low! Guess again'));
    } else if (num > randomNum) {
      num = parseInt(prompt('Too High! Guess again'));
    } else {
      isContinue = prompt('You Win! Play gain? (yes/no)');
      while (!(/yes|no/.test(isContinue))) {
        isContinue = prompt('Input yes or no');
      }
      break;
    }
  }

  if (isContinue == 'yes') {
    guessNum();
  } else {
    alert('Thanks for playing.');
  }
}

guessNum();
