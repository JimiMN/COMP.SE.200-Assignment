import { assert } from 'chai';
import add from '../src/add.js';

describe('add function', () => {
    it('should return the sum of two numbers', () => {
    assert.equal(add(1, 1), 2);
    });
});