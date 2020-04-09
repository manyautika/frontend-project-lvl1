import gameEngine from '../index.js';
import getRandom from '../functions.js';

const generateStage = () => {
  const randomNumber = getRandom();
  const question = randomNumber;
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};
const checkParity = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(condition, generateStage);
};

export default checkParity;
