import { assert } from 'chai';
import compact from '../src/compact.js';

describe('compact', () => {
    it('should remove all falsey values from the array', () => {
      const inputArray = [0, 1, false, 2, '', 3];
      const expectedResult = [1, 2, 3];
      assert.deepEqual(compact(inputArray), expectedResult);
    });
  
    it('should handle arrays with all falsey values', () => {
      const inputArray = [false, null, 0, '', undefined, NaN];
      const expectedResult = [];
      assert.deepEqual(compact(inputArray), expectedResult);
    });
  
    it('should handle arrays with a mix of truthy and falsey values', () => {
      const inputArray = [1, 'hello', false, null, 0, '', undefined, NaN];
      const expectedResult = [1, 'hello'];
      assert.deepEqual(compact(inputArray), expectedResult);
    });
  
    it('should handle an empty array', () => {
      const inputArray = [];
      const expectedResult = [];
      assert.deepEqual(compact(inputArray), expectedResult);
    });
  
    it('should not modify the original array', () => {
      const inputArray = [1, 2, 3];
      compact(inputArray);
      assert.deepEqual(inputArray, [1, 2, 3]);
    });
  });