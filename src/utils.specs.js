/* eslint func-names: "off" */
/* eslint prefer-arrow-callback: "off" */
/* eslint import/no-extraneous-dependencies: "off" */

import { assert } from 'chai';
import { getRandomInt, times, immutableSort } from './utils';

describe('utils tests', () => {
  describe('times', function () {
    it('should return array of length eq to "n"', function () {
      assert.lengthOf(times(10, () => null), 10);
    });
    it('result array should contain results of each func call', function () {
      const actual = times(10, () => 'hi');
      assert.isTrue(actual.every(val => val === 'hi'));
    });
  });
  describe('getRandomInt', function () {
    it('should return int', function () {
      assert.isNumber(getRandomInt(0, 100));
    });
    it('range should work', function () {
      const minVal = 10;
      const maxVal = 50;
      const actual = times(10000, () => getRandomInt(minVal, maxVal));
      actual.forEach((val) => {
        assert.isAtLeast(val, minVal);
        assert.isBelow(val, maxVal + 1);
      });
    });
    it('range with min which less than zero should work', function () {
      const minVal = -10;
      const maxVal = 50;
      const actual = times(10000, () => getRandomInt(minVal, maxVal));
      actual.forEach((val) => {
        assert.isAtLeast(val, minVal);
        assert.isBelow(val, maxVal + 1);
      });
    });
    it('range should include min max vals', function () {
      const minVal = -10;
      const maxVal = 50;
      const actual = times(10000, () => getRandomInt(minVal, maxVal));
      assert.includeMembers(actual, [minVal, maxVal]);
    });
  });

  describe('immutableSort', function () {
    it('immutableSort([3, 2, 1]) === [1, 2, 3]', function () {
      assert.sameOrderedMembers(immutableSort([3, 2, 1]), [1, 2, 3]);
    });
    it('immutableSort([3, 5, 2, 5, 1, 6, 1, 1, 0]) === [0, 1, 1, 1, 2, 3, 5, 5, 6]', function () {
      assert.sameOrderedMembers(
        immutableSort([3, 5, 2, 5, 1, 6, 1, 1, 0]), [0, 1, 1, 1, 2, 3, 5, 5, 6],
      );
    });
    it('immutableSort([]) === []', function () {
      assert.sameOrderedMembers(immutableSort([]), []);
    });
  });
});
