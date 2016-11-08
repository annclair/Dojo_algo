'use strict'
let assert = require('assert'),
    vowelConsonantCount = require('../vowelConsonantCount');

describe('Count vowel and consonant', () => {

    it('should be loaded', () => {
        assert.equal(true, true);
    });

    it('count ab', () => {
        assert.deepEqual(vowelConsonantCount('ab'), {v:1,c:1});
    });

    it('count Ab', () => {
        assert.deepEqual(vowelConsonantCount('Ab'), {v:1,c:1});
    });

    it('count hello', () => {
        assert.deepEqual(vowelConsonantCount('hello'), {v:2,c:3});
    });

    it('count empty', () => {
        assert.deepEqual(vowelConsonantCount(''), {v:0,c:0});
    });

    it('count null', () => {
        assert.deepEqual(vowelConsonantCount(), {v:0,c:0});
    });

    it('count number', () => {
        assert.deepEqual(vowelConsonantCount(3), {v:0,c:0});
    });

})
