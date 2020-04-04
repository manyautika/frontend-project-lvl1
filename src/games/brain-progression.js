import { gameEngine } from '../index.js';
import getRandom from '../functions.js';

const makeProgression = (n) => {
  const step = getRandom(3, 2);
  let currentNum = n;
  const arr = [];
  const progrLength = 10;
  for (let i = 0; i < progrLength; i += 1) {
    arr[i] = currentNum;
    currentNum += step;
  }
  return arr;
};

const f = () => {
  const randomNum = getRandom(50);
  const temporaryArr = makeProgression(randomNum);
  const index = getRandom(9);
  const expressions = [...temporaryArr];
  expressions[index] = '..';
  const question = `${expressions.join(' ')}`;
  const rightAnswer = temporaryArr[index];
  return [question, rightAnswer.toString()];
};

const progression = () => {
  const condition = 'What number is missing in the progression?';
  gameEngine(condition, f);
};
export default progression;
