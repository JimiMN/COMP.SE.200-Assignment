import { assert } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
  it('should convert a positive floating-point number to integer', () => {
    assert.equal(toInteger(3.2), 3);
    assert.equal(toInteger(5.9), 5);
  });

  it('should convert a negative floating-point number to integer', () => {
    assert.equal(toInteger(-2.8), -2);
    assert.equal(toInteger(-7.5), -7);
  });

  it('should convert zero to integer', () => {
    assert.equal(toInteger(0), 0);
    assert.equal(toInteger(-0), 0);
  });

  it('should convert Number.MIN_VALUE to integer (which is 0)', () => {
    assert.equal(toInteger(Number.MIN_VALUE), 0);
  });

  it('should convert Infinity to large integers', () => {
    assert.equal(toInteger(Infinity), Number.MAX_VALUE);
  });

  it('should convert a string representation of a number to integer', () => {
    assert.equal(toInteger('3.2'), 3);
    assert.equal(toInteger('-5.9'), -5);
  });

  it('should convert non-numeric strings to 0', () => {
    assert.equal(toInteger('abc'), 0);
    assert.equal(toInteger(''), 0);
  });
});
