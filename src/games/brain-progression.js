import gameEngine from '../index.js';
import getRandom from '../functions.js';

const condition = 'What number is missing in the progression?';
const makeProgression = (n, step) => {
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
  const firstNum = getRandom();
  const progression = makeProgression(firstNum, getRandom(2, 3));
  const index = getRandom(1, progression.length - 1);
  const expressions = [...progression];
  expressions[index] = '..';
  const question = expressions.join(' ');
  const rightAnswer = progression[index];
  return [question, rightAnswer.toString()];
};
const runProgression = () => {
  gameEngine(condition, generateStage);
};
export default runProgression;
