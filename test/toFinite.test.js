import { assert } from 'chai';
import toFinite from '../src/toFinite.js';

describe('toFinite', () => {
  it('should convert a integer to a finite number', () => {
    assert.equal(toFinite(42), 42);
  });

  it('should convert zero to a finite number', () => {
    assert.equal(toFinite(0), 0);
  });

  it('should convert a floating-point number to a finite number', () => {
    assert.equal(toFinite(3.14), 3.14);
  });

  it('should convert Infinity to the maximum finite number', () => {
    assert.equal(toFinite(Infinity), Number.MAX_VALUE);
  });

  it('should convert NaN to zero', () => {
    assert.equal(toFinite(NaN), 0);
  });

  it('should convert true to 1', () => {
    assert.equal(toFinite(true), 1);
  });

  it('should convert false to 0', () => {
    assert.equal(toFinite(false), 0);
  });

  it('should convert null to 0', () => {
    assert.equal(toFinite(null), 0);
  });

  it('should convert undefined to 0', () => {
    assert.equal(toFinite(undefined), 0);
  });
});
