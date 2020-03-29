import { gameEngine } from '../index.js';

const gcd = () => {
  const condition = 'Find the greatest common divisor of given numbers.';
  const f = () => {
    const randomFirst = Math.floor(Math.random() * 100) + 1;
    const randomSecond = Math.floor(Math.random() * 100) + 1;
    const question = `Question: ${randomFirst} ${randomSecond}`;
    const divider = randomFirst >= randomSecond ? randomSecond : randomFirst;
    let rightAnswer;
    for (let i = divider; i >= 1; i -= 1) {
      if (randomFirst % i === 0 && randomSecond % i === 0) {
        rightAnswer = i;
        break;
      }
    }
    return [question, rightAnswer.toString()];
  };
  gameEngine(condition, f);
};
export default gcd;
