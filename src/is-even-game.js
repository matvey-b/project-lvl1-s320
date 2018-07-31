import readlineSync from 'readline-sync';

const GREETING = 'Welcome to the Brain Games!';
const GAME_DESCRIPTION = 'Answer "yes" if number even otherwise answer "no".';

const makeUserGreeting = name => `Hello, ${name}!!!`;

const getUserName = () => readlineSync.question('May I have your name? ', { defaultInput: 'Human' });

const isEven = num => num % 2 === 0;

const getRandomInt = () => Math.round(Math.random() * 100);

export default () => {
  console.log(GREETING);
  console.log(GAME_DESCRIPTION, '\n');
  const userName = getUserName();
  console.log(makeUserGreeting(userName), '\n');

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt();
    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
