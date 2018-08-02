/* eslint func-names: "off" */
/* eslint prefer-arrow-callback: "off" */
/* eslint import/no-extraneous-dependencies: "off" */

import { assert } from 'chai';
import { balanceNum } from './balance';

describe('Balance Game tests', function () {
  describe('balanceNum tests', function () {
    it('should return str', function () {
      assert.isString(balanceNum(1));
    });
    it('balanceNum(14) === "23"', function () {
      assert.strictEqual(balanceNum(14), '23');
    });
    it('balanceNum(215) === "233"', function () {
      assert.strictEqual(balanceNum(215), '233');
    });
    it('balanceNum(4181) === "3344"', function () {
      assert.strictEqual(balanceNum(4181), '3344');
    });
    it('balanceNum(355) === "445"', function () {
      assert.strictEqual(balanceNum(355), '445');
    });
  });
});
