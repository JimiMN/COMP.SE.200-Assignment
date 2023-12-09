import { assert } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate', () => {
  it('should return true for a valid Date object', () => {
    assert.equal(isDate(new Date()), true);
    assert.equal(isDate(new Date('2023-01-01')), true);
  });

  it('should return false for non-Date objects', () => {
    assert.equal(isDate('Mon April 23 2012'), false);
    assert.equal(isDate(123), false);
    assert.equal(isDate({}), false);
    assert.equal(isDate([]), false);
    assert.equal(isDate(null), false);
    assert.equal(isDate(undefined), false);
  });

  it('should return false for other object types', () => {
    assert.equal(isDate(/abc/), false);
    assert.equal(isDate(() => {}), false);
    assert.equal(isDate(Symbol('test')), false);
  });
});

