/*

Informations : https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

*/
'use strict';
let assert = require('assert'),
    Caesar = require('../caesar');

describe('Roman Encryption', () => {

    it('should be loaded', () => {
        assert.equal(true, true);
    })

    it('A crypt to D', () => {
        assert.equal(Caesar.encrypt('A'), 'D');
    })

    it('a crypt to d', () => {
        assert.equal(Caesar.encrypt('a'), 'd');
    })

    it('Ab crypt to De', () => {
        assert.equal(Caesar.encrypt('Ab'), 'De');
    })

    it('Jerome crypt to Mhurph', () => {
        assert.equal(Caesar.encrypt('Jerome'), 'Mhurph');
    })

    it('Xylophone crypt to Aborskrqh', () => {
        assert.equal(Caesar.encrypt('Xylophone'), 'Aborskrqh');
    })

    it('Aborskrqh decrypt to Xylophone', () => {
        assert.equal(Caesar.decrypt('Aborskrqh'), 'Xylophone');
    })

})
