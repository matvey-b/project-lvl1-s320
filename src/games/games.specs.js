/* eslint func-names: "off" */
/* eslint prefer-arrow-callback: "off" */
/* eslint import/no-extraneous-dependencies: "off" */

import gcdGame from './gcd';
import calcGame from './calc';
import evenGame from './even';
import balanceGame from './balance';
import progressionGame from './progression';

const games = [gcdGame, calcGame, evenGame, balanceGame, progressionGame];

process.env.DEBUG = true;

describe('Games tests', function () {
  it('all games should no throw any exceptions', function () {
    games.forEach(game => game());
  });
});
