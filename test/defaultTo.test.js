import { assert } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {
  it('should return the value if it is not NaN, null, or undefined', () => {
    assert.equal(defaultTo(1, 10), 1);
    assert.equal(defaultTo('hello', 'world'), 'hello');
  });

  it('should return the default value if the input value is NaN', () => {
    assert.equal(defaultTo(NaN, 10), 10);
  });

  it('should return the default value if the input value is null', () => {
    assert.equal(defaultTo(null, 10), 10);
  });

  it('should return the default value if the input value is undefined', () => {
    assert.equal(defaultTo(undefined, 10), 10);
  });

  it('should handle different types of default values', () => {
    assert.equal(defaultTo('hello', null), 'hello');
    assert.deepEqual(defaultTo({ key: 'value' }, []), { key: 'value' });
  });

  it('should handle complex objects as input values', () => {
    const inputObject = { prop: { nested: null } };
    const defaultValue = 'default';
    assert.deepEqual(defaultTo(inputObject.prop.nested, defaultValue), defaultValue);
  });
});
