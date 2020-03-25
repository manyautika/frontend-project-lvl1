import readlineSync from 'readline-sync';

const isEven = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello ${name} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const decision = readlineSync.question('Your answer:');
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (decision !== rightAnswer) {
      console.log(`"${decision}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
  return null;
};
export default isEven;
