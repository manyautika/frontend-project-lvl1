import gameEngine from '../index.js';
import getRandom from '../functions.js';

const makeProgression = (n) => {
  const step = getRandom(2, 3);
  let currentNum = n;
  const progression = [];
  const progrLength = 10;
  for (let i = 0; i < progrLength; i += 1) {
    progression[i] = currentNum;
    currentNum += step;
  }
  return progression;
};

const generateStage = () => {
  const randomNum = getRandom();
  const temporaryArr = makeProgression(randomNum);
  const index = getRandom(1, temporaryArr.length - 1);
  const expressions = [...temporaryArr];
  expressions[index] = '..';
  const question = `${expressions.join(' ')}`;
  const rightAnswer = temporaryArr[index];
  return [question, rightAnswer.toString()];
};

const progression = () => {
  const condition = 'What number is missing in the progression?';
  gameEngine(condition, generateStage);
};
export default progression;
