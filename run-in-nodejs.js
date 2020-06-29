const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('input a number(0-100)\n');
rl.prompt();

let randomNum = Math.ceil(Math.random() * 100);
const expectedTimes = Math.ceil(Math.log2(100)) + 1;
let count = 0;

rl.on('line', line => {
  if (/^n(o)?$/i.test(line.trim())) {
    rl.close();
    return;
  } else if (/^y(es)?$/i.test(line.trim())) {
    return;
  }
  const num = parseInt(line);
  if (!Number.isInteger(num)) {
    return console.log('Invalid input');
  }
  count++;
  if (num < randomNum) {
    console.log('Too low');
  } else if (num > randomNum) {
    console.log('Too Hight');
  } else {
    console.log('You Win!');
    randomNum = Math.ceil(Math.random() * 100);
    count = 0;
    console.log('Replay? y(es) n(o)');
  }
});
