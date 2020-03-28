import { gameEngine } from '../index.js';

const isEven = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const f = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const question = `Question: ${randomNumber}`;
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  gameEngine(condition, f);
};
export default isEven;
