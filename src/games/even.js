import gameEngine from '../index.js';
import getRandom from '../random-num.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateStage = () => {
  const question = getRandom();
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};
const runEven = () => {
  gameEngine(condition, generateStage);
};
export default runEven;
