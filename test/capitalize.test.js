import { assert } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize function', () => {
    it('should return word "word" capitalized', () => {
        assert.strictEqual(capitalize("word"), "Word");
    });
});