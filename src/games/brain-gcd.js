import { gameEngine } from '../index.js';
import getRandom from '../functions.js';

const giveGCD = (first, second) => {
  const divider = first >= second ? second : first;
  let rightAnswer;
  for (let i = divider; i >= 1; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      rightAnswer = i;
      break;
    }
  }
  return rightAnswer;
};
const f = () => {
  const randomFirst = getRandom(100);
  const randomSecond = getRandom(100);
  const question = `${randomFirst} ${randomSecond}`;
  const rightAnswer = giveGCD(randomFirst, randomSecond);
  return [question, rightAnswer.toString()];
};
const gcd = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  gameEngine(condition, f);
};
export default gcd;
