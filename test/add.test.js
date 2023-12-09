import { assert } from 'chai';
import add from '../src/add.js';

describe('sum of positive numbers', () => {
    it('should return the sum of two positive numbers', () => {
    assert.equal(add(1, 1), 2);
    });
});

describe('sum of negative numbers', () => {
    it('should return the sum of two negative numbers', () => {
        assert.equal(add(-1, -1), -2);
    });
});

// Voit lisätä muita testejä tarpeesi mukaan
describe('sum of positive and negative numbers', () => {
    it('should return the correct sum of a positive and a negative number', () => {
        assert.equal(add(5, -3), 2);
    });
});

describe('sum of zero and a number', () => {
    it('should return the same number when adding zero', () => {
        assert.equal(add(7, 0), 7);
    });
});