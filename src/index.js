import readlineSync from 'readline-sync';

const gameEngine = (condition, generateStage) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  const numOfRounds = 3;
  for (let counter = 0; counter < numOfRounds; counter += 1) {
    const [question, rightAnswer] = generateStage();
    console.log(`Question: ${question}`);
    const decision = readlineSync.question('Your answer:');
    if (decision !== rightAnswer) {
      console.log(`"${decision}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
