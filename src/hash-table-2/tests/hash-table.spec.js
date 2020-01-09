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
        expect(hashtable.table.length).to.be.equal(0)
    })
    it('Test Hashtable table hash function return number from from string keys', ()=>{
        let hashtable = new Hashtable()
        expect(typeof hashtable.hash('key word')).to.be.equal('number')
    })
    it('Test that put adds value to table with unique key', ()=> {
        let hashtable = new Hashtable()
        hashtable.put('first input', 100)
        expect(hashtable.table[hashtable.hash('first input')]).to.include(100)
    })
    it('Test that interface uses build chains technique for collision resolution', ()=> {
        let hashtable = new Hashtable()
        hashtable.put('this ', 200)
        hashtable.put('this ', 5600)
        expect((hashtable.table[hashtable.hash('this ')]).length).to.be.equal(2)
    })
    it('Test that get return stored data', ()=> {
        let hashtable = new Hashtable()
        hashtable.put('this ', 200)
        expect(hashtable.get('this ')).to.be.equal(200)
    })
})