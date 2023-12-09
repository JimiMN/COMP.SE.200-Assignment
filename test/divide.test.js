import { assert } from 'chai';
import divide from '../src/divide.js';

describe('divide', () => {
  it('should divide two numbers and return the quotient', () => {
    assert.deepEqual(divide(10, 2), 5);
    assert.deepEqual(divide(0, 5), 0);
  });

  it('should handle negative dividends and divisors', () => {
    assert.deepEqual(divide(-6, 2), -3);
    assert.deepEqual(divide(8, -4), -2);
    assert.deepEqual(divide(-10, -2), 5);
  });

  it('should handle decimal numbers', () => {
    assert.deepEqual(divide(1.5, 0.5), 3);
    assert.deepEqual(divide(3.6, 1.2), 3);
  });

  it('should handle the case where both dividend and divisor are zero', () => {
    assert.deepEqual(divide(0, 0), NaN);
  });
});
