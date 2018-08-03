/* eslint func-names: "off" */
/* eslint prefer-arrow-callback: "off" */
/* eslint import/no-extraneous-dependencies: "off" */

import { assert } from 'chai';
import { isPrime } from '../games/prime';

describe('primeGame tests', function () {
  describe('isPrime func tests', function () {
    it('isPrime(7) === true', function () {
      assert.strictEqual(isPrime(7), true);
    });
    it('isPrime(6) === false', function () {
      assert.strictEqual(isPrime(6), false);
    });
    it('isPrime(2) === true', function () {
      assert.strictEqual(isPrime(2), true);
    });
    it('isPrime(3) === true', function () {
      assert.strictEqual(isPrime(3), true);
    });
    it('isPrime(-7) === false', function () {
      assert.strictEqual(isPrime(-7), false);
    });
    it('isPrime(15) === false', function () {
      assert.strictEqual(isPrime(15), false);
    });
    it('isPrime(1) === false', function () {
      assert.strictEqual(isPrime(1), false);
    });
    it('isPrime(0) === false', function () {
      assert.strictEqual(isPrime(0), false);
    });
  });
});
