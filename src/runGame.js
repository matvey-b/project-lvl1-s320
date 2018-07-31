import readlineSync from 'readline-sync';

const countOfQuestions = 3;
const greeting = 'Welcome to the Brain Games!';

const runGame = (game) => {
  console.log(greeting);
  console.log(game.description, '\n');
  const userName = readlineSync.question('May I have your name? ', { defaultInput: 'Human' });
  console.log(`Hello, ${userName}!!!\n`);

  for (let i = 1; i <= countOfQuestions; i += 1) {
    const { question, correctAnswer } = game.run();
    console.log('Question: ', question);
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

export default runGame;
