import gameEngine from '../index.js';
import getRandom from '../functions.js';

const generateStage = () => {
  const randomFirst = getRandom();
  const randomSecond = getRandom();
  const mathSymbols = ['+', '-', '*'];
  const index = getRandom(0, mathSymbols.length);
  const question = `${randomFirst} ${mathSymbols[index]} ${randomSecond}`;
  let rightAnswer;
  switch (mathSymbols[index]) {
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
  gameEngine(condition, generateStage);
};

export default calculation;
