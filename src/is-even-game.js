import readlineSync from 'readline-sync';
import getNameAndGratz from './greeting';

const isEven = num => num % 2 === 0;

const getRandomInt = () => Math.round(Math.random() * 100);

export default () => {
  let correctAnswersCount = 0;
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = getNameAndGratz();

  const playNextRound = () => {
    const num = getRandomInt();
    console.log('Question: ', num);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  };
  while (correctAnswersCount < 3) { playNextRound(); }
  console.log(`Congratulations, ${userName}!`);
};
