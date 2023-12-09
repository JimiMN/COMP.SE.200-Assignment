import { assert } from 'chai';
import isEmpty from '../src/isEmpty.js';


describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    assert.equal(isEmpty(null), true);
    assert.equal(isEmpty(undefined), true);
  });

  it('should return true for true, false, and numeric values', () => {
    assert.equal(isEmpty(true), true);
    assert.equal(isEmpty(false), true);
    assert.equal(isEmpty(0), true);
    assert.equal(isEmpty(42), true);
  });

  it('should return false for non-empty objects', () => {
    assert.equal(isEmpty({ 'a': 1 }), false);
    assert.equal(isEmpty({}), true);
    assert.equal(isEmpty({ 'a': undefined }), false);
    assert.equal(isEmpty({ 'a': null }), false);
  });

  it('should return true for empty objects', () => {
    assert.equal(isEmpty({}), true);
    assert.equal(isEmpty(Object.create(null)), true);
  });
});
