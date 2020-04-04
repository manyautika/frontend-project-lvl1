import { gameEngine } from '../index.js';
import getRandom from '../functions.js';

const isPrime = (n) => {
  let i = Math.floor(n / 2);
  for (i; i > 1; i -= 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return false;
};
const f = () => {
  const randomNum = getRandom(5000);
  const question = `${randomNum}`;
  const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, rightAnswer];
};
const prime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  gameEngine(condition, f);
};
export default prime;
