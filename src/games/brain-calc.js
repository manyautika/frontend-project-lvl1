import { gameEngine } from '../index.js';

const calculation = () => {
  const condition = 'What is the result of the expression?';
  const f = () => {
    const randomFirst = Math.floor(Math.random() * 50) + 1;
    const randomSecond = Math.floor(Math.random() * 50) + 1;
    const operands = ['+', '-', '*'];
    const index = Math.floor(Math.random() * 2) + 1;
    const expressions = `${randomFirst} ${operands[index]} ${randomSecond}`;
    const question = `Question: ${expressions}`;
    let rightAnswer;
    if (index === 0) {
      rightAnswer = randomFirst + randomSecond;
    }
    if (index === 1) {
      rightAnswer = randomFirst - randomSecond;
    }
    if (index === 2) {
      rightAnswer = randomFirst * randomSecond;
    }
    return [question, rightAnswer.toString()];
  };
  gameEngine(condition, f);
};
export default calculation;
