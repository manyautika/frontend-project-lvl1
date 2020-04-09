import gameEngine from '../index.js';
import getRandom from '../functions.js';

const isPrime = (n) => {
  const end = Math.floor(n / 2);
  for (let i = 2; i < end; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return false;
};
const generateStage = () => {
  const randomNum = getRandom();
  const question = randomNum;
  const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};
const prime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  gameEngine(condition, generateStage);
};
export default prime;
