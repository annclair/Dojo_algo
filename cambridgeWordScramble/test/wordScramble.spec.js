'use strict';
let assert = require('assert');
let scramble = require('../scramble');

describe('Cambrige Word Scramble', () => {

    it('LOADED', () => {
        assert.equal(true, true);
    })

    it('Hello', () => {
        assert.equal(scramble('hello')[0], 'h');
    })

    it('Hello (2)', () => {
        assert.equal(scramble('hello')[4], 'o');
    })

    it('London', () => {
        assert.equal(scramble('london').length, 'london'.length);
        assert.equal(scramble('london')[0], 'l');
        assert.equal(scramble('london')[5], 'n');
    })

    it('Hello (3)', () => {
        assert.equal(scramble('hello').length, 'hello'.length);
        assert.notEqual(scramble('hello'), 'hello');
    })

    it('London 2', () => {
        assert.equal(scramble('london').length, 'london'.length);
        assert.notEqual(scramble('london'), 'london');
    })

    it('alex', () => {
        assert.notEqual(scramble('alex'), 'alex');
    })

    it('kayak', () => {
        assert.notEqual(scramble('kayak'), 'kayak');
    })

})
