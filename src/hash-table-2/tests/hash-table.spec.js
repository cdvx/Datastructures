var chai = require('chai')
var mocha = require('mocha')
var expect = chai.expect
var Hashtable = require('../hash-table')

describe('Hashtable Interface tests', ()=>{
    it('Test Hashtable Interface is immutable', ()=>{
        let hashtable = new Hashtable()
        expect(hashtable).to.be.frozen
    })
    it('Test Hashtable table has no predefined length', ()=>{
        let hashtable = new Hashtable()
        expect(hashtable.length).to.be.undefined
    })
    it('Test Hashtable table hash function return number from from string keys', ()=>{
        let hashtable = new HashTable()
        expect(typeof hashtable.hash('key word')).to.be.equal('number')
    })
})