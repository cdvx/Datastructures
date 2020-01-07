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

    it('Test that put adds value to table with unique key', ()=> {
        let hashtable = new HashTable()
        hashtable.put('first', 100)
        expect(hashtable.table[hashtable.hash('first')]).to.be.equal('first')
        expect(hashtable.values[hashtable.hash('first')]).to.be.equal(100)
    })

    it('Test that hash returns int value for string key', ()=> {
        let hashtable = new HashTable()
        expect(typeof hashtable.hash('wordd')).to.be.equal('number')
        expect(hashtable.hash('wordd')).to.be.equal(124)
    })

})