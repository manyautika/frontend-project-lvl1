import readlineSync from 'readline-sync';

const askName = () => {
  const answer = readlineSync.question('May I have your name?');
  console.log(`Hello &{answer} !`);
};
default export askName;
