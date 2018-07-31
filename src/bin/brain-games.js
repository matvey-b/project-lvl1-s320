#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ', { defaultInput: 'Human' });
console.log(`Hello, ${name}!!!\n`);
