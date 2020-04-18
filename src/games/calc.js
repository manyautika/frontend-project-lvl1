import gameEngine from '../index.js';
import getRandom from '../random-num.js';

const condition = 'What is the result of the expression?';
const generateStage = () => {
  const randomFirst = getRandom();
  const randomSecond = getRandom();
  const operations = ['+', '-', '*'];
  const index = getRandom(0, operations.length);
  const question = `${randomFirst} ${operations[index]} ${randomSecond}`;
  let rightAnswer;
  switch (operations[index]) {
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
const runCalculation = () => {
  gameEngine(condition, generateStage);
};
export default runCalculation;
