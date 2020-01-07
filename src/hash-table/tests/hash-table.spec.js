var chai = require('chai')
var mocha = require('mocha')
var expect = chai.expect
var HashTable = require('../hash-table')

describe('Hashtable Interface tests', () => {
    it('Test that returned interface is immutable', () => {
        let hashtable = new HashTable()
        expect(hashtable).to.be.frozen
    })

    it('Test that table length is 137', ()=>{
        let hashtable = new HashTable()
        expect(hashtable.table.length).to.be.equal(137)
    })

})