/* eslint func-names: "off" */
/* eslint prefer-arrow-callback: "off" */
/* eslint import/no-extraneous-dependencies: "off" */

import { assert } from 'chai';
import { times } from './utils.specs';
import { getRandomInt } from '../utils';
import { gcd, gcdBinary } from '../games/gcd';

describe('GCD Game tests', function () {
  describe('gcd', function () {
    it('gcd(2, 4) === 2', function () {
      assert.strictEqual(gcd(2, 4), 2);
    });
    it('gcd(32,16) === 16', function () {
      assert.strictEqual(gcd(32, 16), 16);
    });
    it('gcd(100, 52) === 4', function () {
      assert.strictEqual(gcd(100, 52), 4);
    });
    it('gcd(3, 9) === 3', function () {
      assert.strictEqual(gcd(3, 9), 3);
    });
    it('gcd(0, 9) === 9', function () {
      assert.strictEqual(gcd(0, 9), 9);
    });
    it('gcd(9, 0) === 9', function () {
      assert.strictEqual(gcd(9, 0), 9);
    });
    it('gcd(9, 1) === 9', function () {
      assert.strictEqual(gcd(9, 1), 1);
    });
  });
  describe('algorithms comparison', function () {
    it('1M calls of simple gcd', function () {
      times(100000, () => gcd(getRandomInt(0, 1000), getRandomInt(0, 1000)));
    });
    it('1M calls of binary gcd', function () {
      times(100000, () => gcdBinary(getRandomInt(0, 1000), getRandomInt(0, 1000)));
    });
  });
});
