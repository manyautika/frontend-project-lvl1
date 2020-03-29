import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const gameEngine = (condition, f) => {
  greeting();
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  for (let counter = 0; counter < 3; counter += 1) {
    const [question, rightAnswer] = f();
    console.log(question);
    const decision = readlineSync.question('Your answer:');
    if (decision !== rightAnswer) {
      console.log(`"${decision}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};

export default greeting;
