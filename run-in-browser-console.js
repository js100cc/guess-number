/*
 * This is a guessing number game running in browser developer console.
 *
 * How to play?
 * 1. User need to type a js expression like num = 10 to input number
 * 2. The expected largest number of times is 8 if you calculate every input.
 * 3. When you tried 11 times, there is a trick exposed to you, input trick
 *    and the answer is show.
 *
 * How do I code it?
 * 1. I use a timer to check user input every 100ms
 * 2. I use IIFE to enclose the random number and main code.
 * 3. I use a count checker to provide a trick untill user really have tried many times
 * 
 */

let num = Infinity;
let trick = 'Not yet, try more times';

(() => {
  const randomNum = Math.ceil(Math.random() * 100);
  let status = Infinity;

  let count = 0;
  const expectedTimes = Math.ceil(Math.log2(100)) + 1;

  console.log('Guessing number game, from 0 to 100');
  console.log('input as num = 50');


  const check = (num, randomNum) => {
    if (!Number.isInteger(num)) {
      return console.log('Not a valid interger number, input as num = 50');
    }
    if (num < randomNum) {
      console.log('Too low');
    } else if (num > randomNum) {
      console.log('Too high');
    } else {
      console.log('You Win!');
      console.log('Refresh the page to replay');
      return true;
    }
  }

  const timer = setInterval(() => {
    if (status !== num) {
      const result = check(num, randomNum);
      if (result) {
        clearInterval(timer);
        return;
      }
      count++;
      if (count > expectedTimes + 2) {
        console.log('Need a trick? Input trick');
        trick = randomNum;
      }
    }
    status = num;
  }, 100);
})();
