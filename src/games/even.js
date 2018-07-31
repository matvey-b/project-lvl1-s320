const description = 'Answer "yes" if number even otherwise answer "no".';


const isEven = num => num % 2 === 0;

const getRandomInt = () => Math.round(Math.random() * 100);

const even = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default {
  run: even,
  description,
};
