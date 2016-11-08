'use strict';
let assert = require('assert'),
    casino = require('../casino');


describe('BlackJack', () =>{

    it('loaded', () =>{
        assert.equal(true, true);
    });

    it('loaded', () =>{
        assert.equal(casino([['9'],['8']]), 'J');
    });

    it('loaded', () =>{
        assert.equal(casino([['8'],['R']]), 'C');
    });

    it('loaded', () =>{
        assert.equal(casino([['R','7'],['8','D']]), 'C');
    });

    it('loaded', () =>{
        assert.equal(casino([['R','7','2'],['8','D','2','10']]), 'J');
    });

    it('loaded', () =>{
        assert.equal(casino([['R','8','3'],['D','A']]), 'C');
    });

    it('loaded', () =>{
        assert.equal(casino([['2','A','3','A'],['D','8']]), 'C');
    });


})
