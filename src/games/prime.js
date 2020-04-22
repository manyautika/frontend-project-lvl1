import gameEngine from '../index.js';
import getRandom from '../random-num.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (n) => {
  if (n % 2 === 0) {
    return false;
  }
  const end = Math.floor(n / 2);
  for (let i = 3; i < end; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const generateStage = () => {
  const question = getRandom();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};
const startGame = () => {
  gameEngine(condition, generateStage);
};
export default startGame;
