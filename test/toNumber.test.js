import { assert } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should convert a positive integer string to number', () => {
    assert.equal(toNumber('42'), 42);
  });

  it('should convert a negative integer string to number', () => {
    assert.equal(toNumber('-123'), -123);
  });

  it('should convert a positive floating-point string to number', () => {
    assert.equal(toNumber('3.14'), 3.14);
  });

  it('should convert a negative floating-point string to number', () => {
    assert.equal(toNumber('-2.718'), -2.718);
  });

  it('should convert Infinity string to Infinity', () => {
    assert.equal(toNumber('Infinity'), Infinity);
  });

  it('should convert null and undefined to 0', () => {
    assert.equal(toNumber(null), 0);
    assert.equal(toNumber(undefined), 0);
  });

  it('should return NaN for non-numeric strings', () => {
    assert(isNaN(toNumber('abc')));
  });

  it('should return NaN for empty strings', () => {
    assert(isNaN(toNumber('')));
  });

  it('should convert objects to numbers using valueOf method', () => {
    const obj = { valueOf: () => 42 };
    assert.equal(toNumber(obj), 42);
  });

  it('should convert objects to numbers using toString method', () => {
    const obj = { toString: () => '3.14' };
    assert.equal(toNumber(obj), 3.14);
  });
});
