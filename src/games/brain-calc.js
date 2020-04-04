import { gameEngine } from '../index.js';
import getRandom from '../functions.js';

const f = () => {
  const randomFirst = getRandom(10);
  const randomSecond = getRandom(10);
  const operands = ['+', '-', '*'];
  const index = getRandom(3, 0);
  const question = `${randomFirst} ${operands[index]} ${randomSecond}`;
  let rightAnswer;
  switch (operands[index]) {
    case '+':
      rightAnswer = randomFirst + randomSecond;
      break;
    case '-':
      rightAnswer = randomFirst - randomSecond;
      break;
    case '*':
      rightAnswer = randomFirst * randomSecond;
      break;
    default:
  }
  return [question, rightAnswer.toString()];
};

const calculation = () => {
  const condition = 'What is the result of the expression?';
  gameEngine(condition, f);
};

export default calculation;
