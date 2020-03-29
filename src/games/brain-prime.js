import { gameEngine } from '../index.js';

const isPrime = (n) => {
  let i = Math.floor(n / 2);
  for (i; i > 1; i -= 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const f = () => {
    const randomNum = Math.floor(Math.random() * 5000) + 1;
    const question = `Question: ${randomNum}`;
    const rightAnswer = isPrime(randomNum);
    return [question, rightAnswer.toString()];
  };
  gameEngine(condition, f);
};
export default prime;
