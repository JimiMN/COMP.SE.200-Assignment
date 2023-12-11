import { assert } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
  it('should convert null to an empty string', () => {
    assert.equal(toString(null), '');
  });

  it('should convert a number to a string', () => {
    assert.equal(toString(42), '42');
  });

  it('should convert Infinity to "Infinity"', () => {
    assert.equal(toString(Infinity), 'Infinity');
  });

  it('should convert NaN to "NaN"', () => {
    assert.equal(toString(NaN), 'NaN');
  });

  it('should convert a string to itself', () => {
    assert.equal(toString('abc'), 'abc');
  });
  it('Should convert symbol to a string', ()=> {
    assert.equal(toString(Symbol('abc')), 'abc');
  });
});
