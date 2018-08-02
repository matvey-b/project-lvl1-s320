import readlineSync from 'readline-sync';

const countOfQuestions = 3;
const greeting = 'Welcome to the Brain Games!';
const isDebug = () => process.env.DEBUG;

/**
* @param {{description: string, makeGameData: function}} game
* @return {void}
*/
const runGame = (game) => {
  console.log(greeting);
  console.log(game.description, '\n');
  const userName = isDebug() ? 'Human' : readlineSync.question('May I have your name? ', { defaultInput: 'Human' });
  console.log(`Hello, ${userName}!!!\n`);

  for (let i = 1; i <= countOfQuestions; i += 1) {
    const { question, correctAnswer } = game.makeGameData();
    console.log('Question: ', question);
    let userAnswer;
    if (isDebug()) {
      console.log('Your answer: ', correctAnswer);
      userAnswer = correctAnswer;
    } else {
      userAnswer = readlineSync.question('Your answer: ');
    }
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
