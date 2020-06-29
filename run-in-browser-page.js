const userInput = document.getElementById('user-input');
const msg = document.getElementById('msg');
const showMsg = str => {
  const msgItem = document.createElement('p');
  msgItem.textContent = str;
  msg.appendChild(msgItem);
}

const genRandom = limit => Math.ceil(Math.random() * limit);
const isValidInput = input => Number.isInteger(input);

const startGame = () => {
  const randomNum = genRandom(100);
  userInput.addEventListener('change', (e) => {
    let num = e.target.value;
    num = parseInt(num);
    if (!isValidInput(num)) {
      return showMsg('invalid input');
    }
    if (num < randomNum) {
      showMsg('Too low');
    } else if (num > randomNum) {
      showMsg('Too high');
    } else {
      showMsg('You Win!');
    }
  });
}

startGame();
