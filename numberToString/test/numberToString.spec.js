'use strict';
let test = require('assert'),
    toString = require('../string.js');

describe('Number to string', () => {

    it('Should be return true if loaded', () => {
        test.equal(true, true);
    });

    it('Should be return zero', () => {
        test.equal(toString(0), 'zero');
    });

    it('Should be return one', () => {
        test.equal(toString(1), 'one');
    });

    it('Should be return two', () => {
        test.equal(toString(2), 'two');
    });

    it('Should be return nineteen', () => {
        test.equal(toString(19), 'nineteen');
    });

    it('Should be return twenty', () => {
        test.equal(toString(20), 'twenty');
    });

    it('Should be return twenty one', () => {
        test.equal(toString(21), 'twenty one');
    });

});
