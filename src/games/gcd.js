import gameEngine from '../index.js';
import getRandom from '../random-num.js';

const condition = 'Find the greatest common divisor of given numbers.';
const findGCD = (first, second) => {
  const divider = first >= second ? second : first;
  let rightAnswer;
  for (let i = divider; i >= 1; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      rightAnswer = i;
      break;
    }
  }
  return rightAnswer;
};
const generateStage = () => {
  const randomFirst = getRandom();
  const randomSecond = getRandom();
  const question = `${randomFirst} ${randomSecond}`;
  const rightAnswer = findGCD(randomFirst, randomSecond);
  return [question, rightAnswer.toString()];
};
const runGCD = () => {
  gameEngine(condition, generateStage);
};
export default runGCD;
