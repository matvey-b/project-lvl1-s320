import readlineSync from 'readline-sync';
import calc from './games/calc';
import even from './games/even';
import gcdGame from './games/gcd';
import balance from './games/balance';

const games = {
  calc, even, gcd: gcdGame, balance,
};

const countOfQuestions = 3;
const greeting = 'Welcome to the Brain Games!';

const gameEngine = (game) => {
  console.log(greeting);
  console.log(game.description, '\n');
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'Human' });
  console.log(`Hello, ${userName}!!!\n`);

  for (let i = 1; i <= countOfQuestions; i += 1) {
    const { question, correctAnswer } = game.run();
    console.log('Question: ', question);
    if (process.env.DEBUG) {
      console.log('hint: ', correctAnswer);
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

const runGame = gameName => gameEngine(games[gameName]);

export default runGame;
