import { gameEngine } from '../index.js';
import getRandom from '../functions.js';

const f = () => {
  const randomNumber = getRandom(100);
  const question = `${randomNumber}`;
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};
const isEven = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(condition, f);
};

export default isEven;
