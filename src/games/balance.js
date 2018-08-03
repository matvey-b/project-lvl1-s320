import runGame from '../runGame';
import { isEven, getRandomInt, immutableSort } from '../utils';

const description = 'Balance the given number.';

const isBalanced = (digitsSequence) => {
  const iter = (digits) => {
    if (digits.length === 1) {
      return true;
    }
    const currNum = digits[0];
    const nextNum = digits[1];
    if (currNum === nextNum || currNum === nextNum - 1) {
      return iter(digits.slice(1));
    }
    return false;
  };

  return iter(digitsSequence);
};

export const balanceNum = (num) => {
  const numsArray = [...num.toString()].map(digit => parseInt(digit, 10)).sort();
  const iter = (digits) => {
    if (isBalanced(digits)) {
      return digits;
    }
    const lastIdx = digits.length - 1;
    const sumOfNums = digits[0] + digits[lastIdx];
    const minNum = Math.floor(sumOfNums / 2);
    const maxNum = isEven(sumOfNums) ? minNum : minNum + 1;
    const result = [minNum, ...digits.slice(1, lastIdx), maxNum];
    return iter(immutableSort(result));
  };
  return iter(numsArray).join('');
};

const makeGameData = () => {
  const question = getRandomInt(0, 9999);
  return {
    question,
    correctAnswer: balanceNum(question),
  };
};

export default () => runGame({ makeGameData, description });
