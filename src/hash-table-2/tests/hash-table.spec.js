var chai = require('chai')
var mocha = require('mocha')
var expect = chai.expect
var Hashtable = require('../hash-table')

describe('Hashtable Interface tests', ()=>{
    it('Test Hashtable Interface is immutable', ()=>{
        let hashtable = new Hashtable()
        expect(hashtable).to.be.frozen
    })
})