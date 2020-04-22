import gameEngine from '../index.js';
import getRandom from '../random-num.js';

const condition = 'What number is missing in the progression?';
const makeProgression = (n, step) => {
  let currentNum = n;
  const progression = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = currentNum;
    currentNum += step;
  }
  return progression;
};
const generateStage = () => {
  const firstNum = getRandom();
  const step = getRandom(2, 4);
  const progression = makeProgression(firstNum, step);
  const index = getRandom(1, progression.length - 1);
  const expression = [...progression];
  expression[index] = '..';
  const question = expression.join(' ');
  const rightAnswer = progression[index];
  return [question, rightAnswer.toString()];
};
const startGame = () => {
  gameEngine(condition, generateStage);
};
export default startGame;
