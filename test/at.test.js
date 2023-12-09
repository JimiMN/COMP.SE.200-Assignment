import { assert } from 'chai';
import at from '../src/at.js';

describe('at', () => {
  it('should pick values from the specified paths in the object', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.c', 'a[1]']);
    assert.deepEqual(result, [3, 4]);
  });

  it('should handle non-existent paths by returning undefined', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.d', 'x']);
    assert.deepEqual(result, [undefined, undefined]);
  });

  it('should work with nested objects and arrays', () => {
    const object = { 'a': [{ 'b': { 'c': [1, 2, 3] } }, 4] };
    const result = at(object, ['a[0].b.c[0]', 'a[0].b.c[2]', 'a[1]']);
    assert.deepEqual(result, [1, 3, 4]);
  });

  it('should handle empty paths by returning an empty array', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object);
    assert.deepEqual(result, []);
  });

  it('should handle duplicate paths by returning values for each occurrence', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, 'a[0].b.c', 'a[0].b.c');
    assert.deepEqual(result, [3, 3]);
  });
});
