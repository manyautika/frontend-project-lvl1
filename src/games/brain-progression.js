import { gameEngine } from '../index.js';

const makeProgression = (n) => {
  let currentNum = n;
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr[i] = currentNum;
    currentNum += 2;
  }
  return arr;
};

const progression = () => {
  const condition = 'What number is missing in the progression?';
  const f = () => {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    const temporaryArr = makeProgression(randomNum);
    const index = Math.floor(Math.random() * 9) + 1;
    const expressions = [...temporaryArr];
    expressions[index] = '..';
    const question = `Question: ${expressions.join(' ')}`;
    const rightAnswer = temporaryArr[index];
    return [question, rightAnswer.toString()];
  };
  gameEngine(condition, f);
};

export default progression;
