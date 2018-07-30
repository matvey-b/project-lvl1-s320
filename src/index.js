import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'Human' });
  console.log(`Hello, ${name}!!!`);
};
